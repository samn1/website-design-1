const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs-extra');
const XLSX = require('xlsx');
const { processExcelFile, createExcelTemplate, processProductsExcelFile } = require('./services/excelProcessor');
const { logger } = require('./utils/logger');

const app = express();
const port = process.env.PORT || 3000;

// Configure CORS properly
app.use(cors({
  origin: '*', // Allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Serve static files SECOND (after CORS)
app.use(express.static('public'));
app.use(express.static('.'));  // Serve files from root directory too

// URL rewriting rules
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, '../products.html'));
});

// Handle 404s - this should be after all other routes
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '../404.html'));
});

app.use(express.json());

// Ensure data and templates directories exist
fs.ensureDirSync(path.join(__dirname, '../data'));
fs.ensureDirSync(path.join(__dirname, '../public/templates'));

// Multer config for both Excel and JSON
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join('data', 'uploads');
    fs.ensureDirSync(uploadDir);
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    if (file.mimetype === 'application/json') {
      cb(null, 'products.json');
    } else {
      cb(null, 'products.xlsx');
    }
  }
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
      file.mimetype === 'application/json'
    ) {
      cb(null, true);
    } else {
      cb(new Error('Only .xlsx or .json files are allowed'));
    }
  }
});

// Excel upload
app.post('/api/upload-excel', upload.single('file'), async (req, res) => {
  try {
    const filePath = path.join('data/uploads', 'products.xlsx');
    if (!fs.existsSync(filePath)) throw new Error('Excel file not found after upload');
    const result = await processExcelFile(filePath);
    res.json({ success: true, message: 'Products updated from Excel successfully', data: result });
  } catch (error) {
    logger.error('Error processing Excel file:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// Product-specific Excel upload 
app.post('/api/upload-products-excel', upload.single('file'), async (req, res) => {
  try {
    // Check if the file exists
    if (!req.file) {
      logger.error('No file uploaded');
      return res.status(400).json({ success: false, message: 'No file uploaded' });
    }
    
    logger.info(`File uploaded: ${req.file.originalname}, saved as: ${req.file.filename}`);
    
    const filePath = path.join('data/uploads', 'products.xlsx');
    if (!fs.existsSync(filePath)) {
      logger.error(`Excel file not found at: ${filePath}`);
      return res.status(500).json({ success: false, message: 'Excel file not found after upload' });
    }
    
    // Use the enhanced processor
    const result = await processProductsExcelFile(filePath);
    
    logger.info('Excel file successfully processed');
    
    res.json({ 
      success: true, 
      message: 'Products uploaded and processed successfully', 
      data: result
    });
  } catch (error) {
    logger.error('Error processing products Excel file:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// Download Excel template
app.get('/api/download-template', (req, res) => {
  try {
    // Use the template creator from the service
    const wb = createExcelTemplate();
    
    // Convert to buffer
    const buffer = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' });
    
    // Send the file
    res.setHeader('Content-Disposition', 'attachment; filename="product_template.xlsx"');
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.send(buffer);
  } catch (error) {
    logger.error('Error creating Excel template:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// JSON upload
app.post('/api/upload-json', upload.single('file'), async (req, res) => {
  try {
    const filePath = path.join('data/uploads', 'products.json');
    const destPath = path.join('data', 'products.json');
    if (!fs.existsSync(filePath)) throw new Error('JSON file not found after upload');
    await fs.copy(filePath, destPath);
    res.json({ success: true, message: 'Products updated from JSON successfully' });
  } catch (error) {
    logger.error('Error processing JSON file:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// Export JSON to Excel
app.get('/api/export-excel', async (req, res) => {
  try {
    const productsPath = path.join('data', 'products.json');
    if (!fs.existsSync(productsPath)) throw new Error('products.json not found');
    const productsData = await fs.readJson(productsPath);
    if (!Array.isArray(productsData.products)) throw new Error('products.json is invalid');
    const ws = XLSX.utils.json_to_sheet(productsData.products);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Products');
    const buffer = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' });
    res.setHeader('Content-Disposition', 'attachment; filename="products_export.xlsx"');
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.send(buffer);
  } catch (error) {
    logger.error('Error exporting Excel file:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get products
app.get('/api/products', (req, res) => {
  try {
    const productsPath = path.join('data', 'products.json');
    if (!fs.existsSync(productsPath)) throw new Error('products.json not found');
    const products = fs.readJsonSync(productsPath);
    res.json(products);
  } catch (error) {
    logger.error('Error fetching products:', error);
    res.status(500).json({ success: false, message: 'Error fetching products' });
  }
});

// Start server
app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
}); 
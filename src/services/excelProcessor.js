const XLSX = require('xlsx');
const fs = require('fs-extra');
const path = require('path');
const { logger } = require('../utils/logger');

const REQUIRED_COLUMNS = [
  'Product Line',
  'Product ID',
  'Name',
  'Description',
  'Price',
  'Status'
];

class ExcelProcessor {
  constructor() {
    this.productsFile = path.join('data', 'products.json');
    this.ensureDataDirectory();
  }

  ensureDataDirectory() {
    fs.ensureDirSync(path.join('data'));
    if (!fs.existsSync(this.productsFile)) {
      fs.writeJsonSync(this.productsFile, { products: [], productLines: [] });
    }
  }

  validateRow(row) {
    const missingColumns = REQUIRED_COLUMNS.filter(col => !row[col]);
    if (missingColumns.length > 0) {
      throw new Error(`Missing required columns: ${missingColumns.join(', ')}`);
    }

    if (isNaN(parseFloat(row.Price))) {
      throw new Error(`Invalid price for product ${row['Product ID']}`);
    }

    if (!['active', 'inactive'].includes(row.Status.toLowerCase())) {
      throw new Error(`Invalid status for product ${row['Product ID']}`);
    }
  }

  async processExcelFile(filePath) {
    try {
      const workbook = XLSX.readFile(filePath);
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const data = XLSX.utils.sheet_to_json(worksheet);

      // Validate data
      data.forEach(this.validateRow);

      // Read existing data
      const existingData = fs.readJsonSync(this.productsFile);
      const existingProducts = new Map(existingData.products.map(p => [p['Product ID'], p]));
      const existingProductLines = new Set(existingData.productLines);

      // Process updates
      const updates = {
        newProducts: [],
        updatedProducts: [],
        newProductLines: []
      };

      data.forEach(row => {
        const productId = row['Product ID'];
        const productLine = row['Product Line'];

        // Check for new product line
        if (!existingProductLines.has(productLine)) {
          updates.newProductLines.push(productLine);
          existingProductLines.add(productLine);
        }

        // Process product
        if (existingProducts.has(productId)) {
          updates.updatedProducts.push(row);
          existingProducts.set(productId, row);
        } else {
          updates.newProducts.push(row);
          existingProducts.set(productId, row);
        }
      });

      // Save updated data
      const updatedData = {
        products: Array.from(existingProducts.values()),
        productLines: Array.from(existingProductLines)
      };

      fs.writeJsonSync(this.productsFile, updatedData, { spaces: 2 });

      logger.info('Excel file processed successfully', updates);
      return updates;
    } catch (error) {
      logger.error('Error processing Excel file:', error);
      throw error;
    }
  }

  createExcelTemplate() {
    try {
      const wb = XLSX.utils.book_new();
      
      // Create template data with one example row
      const templateData = [{
        'Name': 'Example Product',
        'Product Line': 'Example Line',
        'Product ID': 'PROD-001',
        'Product Description': 'This is an example product description',
        'Status': 'true',
        'Price': '99.99'
      }];
      
      const ws = XLSX.utils.json_to_sheet(templateData);
      
      // Set column widths for better readability
      ws['!cols'] = [
        { wch: 25 }, // Name
        { wch: 20 }, // Product Line
        { wch: 15 }, // Product ID
        { wch: 40 }, // Product Description
        { wch: 10 }, // Status
        { wch: 10 }  // Price
      ];
      
      XLSX.utils.book_append_sheet(wb, ws, 'Products');
      
      return wb;
    } catch (error) {
      logger.error('Error creating Excel template:', error);
      throw error;
    }
  }

  processProductsExcelFile(filePath) {
    try {
      // Read the Excel file
      const workbook = XLSX.readFile(filePath);
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const data = XLSX.utils.sheet_to_json(worksheet);
      
      // Define minimum required columns for product data
      const requiredColumns = ['Name', 'Product Line', 'Product ID', 'Product Description', 'Status'];
      
      // Validate all rows have required columns
      for (const row of data) {
        const missingColumns = requiredColumns.filter(col => !row[col]);
        if (missingColumns.length > 0) {
          throw new Error(`Row missing required columns: ${missingColumns.join(', ')}`);
        }
      }
      
      // Read existing data
      let existingData = { products: [], productLines: [] };
      if (fs.existsSync(this.productsFile)) {
        existingData = fs.readJsonSync(this.productsFile);
      }
      
      // Create maps for quick lookups
      const existingProducts = new Map(existingData.products.map(p => [p['Product ID'], p]));
      const productLines = new Set(existingData.productLines);
      
      // Process new data
      data.forEach(product => {
        // Add product line if new
        if (product['Product Line'] && !productLines.has(product['Product Line'])) {
          productLines.add(product['Product Line']);
        }
        
        // Update or add product
        existingProducts.set(product['Product ID'], product);
      });
      
      // Create updated data
      const updatedData = {
        products: Array.from(existingProducts.values()),
        productLines: Array.from(productLines)
      };
      
      // Save to file
      fs.writeJsonSync(this.productsFile, updatedData, { spaces: 2 });
      
      return {
        products: data,
        productLines: Array.from(productLines)
      };
    } catch (error) {
      logger.error('Error processing products Excel file:', error);
      throw error;
    }
  }
}

const processor = new ExcelProcessor();

module.exports = {
  processExcelFile: (filePath) => processor.processExcelFile(filePath),
  createExcelTemplate: () => processor.createExcelTemplate(),
  processProductsExcelFile: (filePath) => processor.processProductsExcelFile(filePath)
}; 
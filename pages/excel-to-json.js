import { useState, useRef } from 'react';
import Head from 'next/head';
import * as XLSX from 'xlsx';

export default function ExcelToJson() {
  const [jsonData, setJsonData] = useState('');
  const [fileName, setFileName] = useState('');
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setLoading(true);
    setFileName(file.name);

    try {
      const data = await file.arrayBuffer();
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonResult = XLSX.utils.sheet_to_json(worksheet);
      
      setJsonData(JSON.stringify(jsonResult, null, 2));
    } catch (error) {
      console.error('Error converting file:', error);
      alert('Error converting file. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!jsonData) return;
    
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName.replace(/\.[^/.]+$/, '') + '.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(jsonData);
    alert('JSON copied to clipboard!');
  };

  const handleClear = () => {
    setJsonData('');
    setFileName('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <>
      <Head>
        <title>Convert Excel to JSON Array Online - Isatec International</title>
        <meta name="description" content="Easily convert Excel files to JSON Array format online. Free tool for converting spreadsheets to JSON data." />
      </Head>

      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-blue-600 text-white p-6">
              <h1 className="text-3xl font-bold">Convert Excel to JSON Array Online</h1>
              <p className="mt-2 text-blue-100">
                Easily convert Excel (or other spreadsheets) to JSON Array with our tool.
              </p>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Panel - File Upload */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-4">1. Data Source</h2>
                    <p className="text-gray-600 mb-4">
                      Prepare the Excel file to convert into JSON Array. We do not store any of your data.
                    </p>
                    
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileUpload}
                        accept=".xlsx,.xls,.csv"
                        className="hidden"
                        id="file-upload"
                      />
                      <label
                        htmlFor="file-upload"
                        className="cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                      >
                        {loading ? 'Processing...' : 'Choose Excel File'}
                      </label>
                      {fileName && (
                        <p className="mt-2 text-sm text-gray-600">
                          Selected: {fileName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Options */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Options</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span className="text-sm">Minify JSON</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Wrap with 'data' key</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Right Panel - Output */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-4">2. JSON Output</h2>
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <button
                          onClick={handleCopyToClipboard}
                          disabled={!jsonData}
                          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                          Copy to Clipboard
                        </button>
                        <button
                          onClick={handleDownload}
                          disabled={!jsonData}
                          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                          Download
                        </button>
                        <button
                          onClick={handleClear}
                          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                        >
                          Clear
                        </button>
                      </div>
                      
                      <textarea
                        value={jsonData}
                        readOnly
                        placeholder="JSON output will appear here..."
                        className="w-full h-96 p-3 border border-gray-300 rounded-md font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div className="mt-12 bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">How to Convert Excel to JSON Array Online?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-3">1</div>
                    <h4 className="font-semibold mb-2">Upload Excel File</h4>
                    <p className="text-sm text-gray-600">
                      Click "Choose Excel File" to upload your .xlsx, .xls, or .csv file.
                    </p>
                  </div>
                  <div>
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-3">2</div>
                    <h4 className="font-semibold mb-2">Automatic Conversion</h4>
                    <p className="text-sm text-gray-600">
                      The tool automatically converts your Excel data into JSON array format.
                    </p>
                  </div>
                  <div>
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-3">3</div>
                    <h4 className="font-semibold mb-2">Copy or Download</h4>
                    <p className="text-sm text-gray-600">
                      Copy the JSON to clipboard or download it as a .json file.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 
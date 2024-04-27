const processExcelBuffer = require("../service/file-upload.service");

function uploadExcel(req, res, next) {
  try {
    const jsonData = processExcelBuffer(req.file.buffer);
    res.json(jsonData);
  } catch (error) {
    console.error("Error processing upload:", error);
    next(error);
  }
}

module.exports = uploadExcel;

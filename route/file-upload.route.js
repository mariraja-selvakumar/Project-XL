const express = require("express");
const multer = require("multer");
const uploadExcel = require("../controller/file-upload.controller");

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/upload", upload.single("excelFile"), uploadExcel);

module.exports = router;

const express = routes("express");
const router = express.Router();

const {LocalFileUpload} = require("../controllers/fileUpload");

// api route4
router.post("/localFileUpload", localFileUpload);

module.exports = router;
const express = require("express");
const router = express.Router();
const { getAllMajorProjects } = require("../controller/majorController");

router.get("/major-projects", getAllMajorProjects);

module.exports = router;

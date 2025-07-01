const MajorProject = require("../models/majorProject");

exports.getAllMajorProjects = async (req, res) => {
  try {
    const projects = await MajorProject.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

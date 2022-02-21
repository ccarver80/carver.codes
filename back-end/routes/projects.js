var express = require("express");
var router = express.Router();

const Project = require("../models").Projects;

router.use(express.json());

router.post("/api/projects", async (req, res) => {
  try {
    const newProject = await Project.create(req.body);
    res.json(newProject.id);
    res.status(201);
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

router.get("/api/projects", async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.status(200).json(projects);
    
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

router.get("/api/projects/:id", async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);

    if (project === null) {
        res.status(404).json({
            message: "This project dose not exist!"
        })
    }else {
         res.status(200).json(project)
      
    }
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

router.delete('/api/projects/:id', async(req, res) => {
  try{
    const deleteProject = await Project.findByPk(req.params.id)

    deleteProject.destroy()

    res.status(204); 
  }catch(err) {
    res.json({
      message: err
    })
  }
})


module.exports = router;

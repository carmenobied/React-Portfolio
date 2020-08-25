const express = require('express')
const ProjectController = require('../controllers/portfolio-controller')
const router = express.Router()

router.post('/project', ProjectController.createProject)
router.put('/project/:id', ProjectController.updateProject)
router.delete('/project/:id', ProjectController.deleteProject)
router.get('/project/:id', ProjectController.getProjectById)
router.get('/projects', ProjectController.getProject)

// If no API routes are hit, send the React app
router.use( (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

module.exports = router
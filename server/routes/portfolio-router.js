const express = require('express')

const ProjectController = require('../controllers/portfolio-controller')

const router = express.Router()

router.post('/project', ProjectController.createProject)
router.put('/project/:id', ProjectController.updateProject)
router.delete('/project/:id', ProjectController.deleteProject)
router.get('/project/:id', ProjectController.getProjectById)
router.get('/project', ProjectController.getProject)

module.exports = router
const express = require('express');
const projects = require('../models/model');
const router = express.Router({
  mergeParams: true
});

router.get('/', async(req,res,next)=>{
    try{
        const project = await projects.find()
        res.json(project)
    }
    catch(err){
        next(err)
    }
})

router.get('/task', (req, res) => {
    projects.allTasks()
    .then(task => {
        res.json(task);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: "failed to get task"})
    })
})

router.get('/:id/tasks', async(req,res,next)=>{
    try{
      const { id } = req.params
      res.json(await projects.findTask(id))
    }
    catch(err){
      next(err)
    }
})

router.get('/:id/resources', async(req,res,next)=>{
    try{
      const { id } = req.params
      res.json(await projects.findResource(id))
    }
    catch(err){
      next(err)
    }
})

router.post('/', (req, res) => {
    projects.addProject(req.body)
    .then(project => {
      project.completed = !!project.completed
      res.status(201).json(project)
    })
    .catch((error) => {
      console.log(error)
      res.status(500).json({message: 'Could not create project'})
    })
})

router.post('/:id/tasks', (req, res) => {
    projects.addTask(req.params.id, req.body)
      .then(resource => {
        res.status(201).json(resource)
      })
      .catch((error) => {
        console.log(error)
        res.status(500).json({message: 'Could not create that resource'})
      })
  })

router.post('/:id/resources', (req, res) => {
        projects.addResource(req.params.id, req.body)
          .then(resource => {
            res.status(201).json(resource)
          })
          .catch((error) => {
            console.log(error)
            res.status(500).json({message: 'Could not create that resource'})
          })
})

router.get('/resources', (req, res) => {
  projects.allResources()
  .then(resource => {
      res.json(resource);
  })
  .catch(err => {
      console.log(err);
      res.status(500).json({ message: "failed to get resources"})
  })
})




module.exports = router 
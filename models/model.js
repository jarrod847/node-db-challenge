const db = require('../data/Db')
module.exports ={
    find,
    findById,
    allTasks,
    findTask,
    findResource,
    addProject,
    addTask, 
    addResource,
    allResources
}

function find(){
    return db('projects')
}

function findById(id) {
    return db('projects')
      .where({id})
      .first()
}

function findTask(project_id){
    return db('task').where({project_id})

}

function allTasks(){
    return db("task")
    .join("projects", "projects.id", "task.project_id")
     .select("projects.name", "projects.description", "task.*")
}

function allResources(){
    return db("resources")
}

function findResource(project_id){
    return db('resources').where({project_id})
}

function addProject(payload){
    return db('projects').insert(payload, 'id')
    .then(([id]) => {
        return findById(id)
    })
}


function addTask(taskInfo, task){
    return db('task').insert(task)
    .then(([id]) => {
        return db('project_tasks').insert({
            project_id: taskInfo,
            task_id: id
        })
    })
}

function addResource(resourceInfo, resource){
    return db('resources').insert(resource)
    .then(([id]) => {
        return db('project_resources').insert({
            project_id: resourceInfo,
            resource_id: id,
          })
    })
}



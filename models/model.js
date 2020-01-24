const db = require('../data/Db')
module.exports ={
    find,
    findById,
    findTask,
    findResource,
    addProject,
    addTask, 
    addResource
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



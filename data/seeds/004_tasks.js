
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {id: 1, notes:'task1', description: 'add', completed:0, project_id: 1},
        {id: 2, notes:'task2', description: 'edit', completed:0, project_id: 1},
        {id: 3, notes:'task3', description: 'delete', completed:0, project_id: 1}
      ]);
    });
};

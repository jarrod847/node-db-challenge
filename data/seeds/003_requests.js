
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, description: 'easy', name: 'beginner', project_id: 2},
        {id: 2, description: 'normal', name: 'adapt', project_id: 2},
        {id: 3, description: 'hard', name: 'expert', project_id: 1}
      ]);
    });
};

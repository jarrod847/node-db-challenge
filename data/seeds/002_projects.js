
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id:1,
          name: 'Kitchen',
          description:'Clean stove',
          completed:false
      },
      {
          id:2,
          name:'Bedroom',
          description:'Clean my room',
          completed:false
      },
      {
          id:3,
          name:'Office',
          description:'finish the project',
          completed:false
      }
      ]);
    });
};

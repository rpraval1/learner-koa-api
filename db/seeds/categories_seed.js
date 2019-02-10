
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert({
        name: 'HollyWood'
      });
    })
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert({
        name: 'BollyWood'
      });
    })
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert({
        name: 'TollyWood'
      });
    });
};

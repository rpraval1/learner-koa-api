const knex = require('../connection');

function getAllCategories() {
    return knex('categories')
    .select('*');
}

function getSingleCategory(id) {
    return knex('categories')
    .select('*')
    .where({id: parseInt(id)});
}

function addCategory(category) {
    return knex('categories')
    .insert(category)
    .returning('*');
}

function updateCategory(id, category) {
    return knex('categories')
    .update(category)
    .where({id: parseInt(id)})
    .returning('*');
}

module.exports = {
    getAllCategories,
    getSingleCategory,
    addCategory,
    updateCategory
};
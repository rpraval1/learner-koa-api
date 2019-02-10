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

module.exports = {
    getAllCategories,
    getSingleCategory
};
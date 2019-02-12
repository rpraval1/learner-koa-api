
exports.up = function(knex, Promise) {
    return knex.schema.createTable('singers', (table) => {
        table.increments();
        table.string('name').notNullable();
        table.string('genre').notNullable();
        table.integer('rating').notNullable();
        table.integer('categories_id').notNullable().references('id').inTable('categories').onDelete('cascade');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('singers');
};

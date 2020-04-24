
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('value').notNullable();

        table.string('person_id').notNullable();

        table.foreign('person_id').references('id').inTable('people');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');  
};

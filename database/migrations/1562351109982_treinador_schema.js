"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TreinadorSchema extends Schema {
  up() {
    this.create("treinadors", table => {
      table.increments();
      table.string("nickName", 80);
      table
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamps();
    });
  }

  down() {
    this.drop("treinadors");
  }
}

module.exports = TreinadorSchema;

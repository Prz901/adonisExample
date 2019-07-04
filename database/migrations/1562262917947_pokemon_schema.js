"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class PokemonSchema extends Schema {
  up() {
    this.create("pokemons", table => {
      table.increments();
      table
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("name", 40).notNullable();
      table.string("type", 40).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("pokemons");
  }
}

module.exports = PokemonSchema;

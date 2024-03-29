"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Treinador extends Model {
  pokemon() {
    return this.belongsTo("App/Models/Pokemon");
  }
  user() {
    return this.hasOne("App/Models/User", "user_id", "id");
  }
}

module.exports = Treinador;

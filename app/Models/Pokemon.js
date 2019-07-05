"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Pokemon extends Model {
  treinador() {
    return this.belongsTo("App/Models/Treinador");
  }
}

module.exports = Pokemon;

"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AlterSharesSchema extends Schema {
  up() {
    this.table("shares", (table) => {
      table.string("content");
    });
  }

  down() {
    this.table("shares", (table) => {
      table.dropcolumn("content");
    });
  }
}

module.exports = AlterSharesSchema;

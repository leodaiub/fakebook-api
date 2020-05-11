"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AlterUsersSchema extends Schema {
  up() {
    this.table("users", (table) => {
      table.string("profile_img");
      table.string("cover_img");
    });
  }

  down() {
    this.table("users", (table) => {
      table.dropColumn("profile_img");
      table.dropColumn("cover_img");
    });
  }
}

module.exports = AlterUsersSchema;

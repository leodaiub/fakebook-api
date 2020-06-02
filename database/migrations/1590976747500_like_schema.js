"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class LikeSchema extends Schema {
  up() {
    this.create("likes", (table) => {
      table
        .integer("post_id")
        .unsigned()
        .references("id")
        .inTable("posts")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.increments();
      table.timestamps();
    });
  }

  down() {
    this.drop("likes");
  }
}

module.exports = LikeSchema;

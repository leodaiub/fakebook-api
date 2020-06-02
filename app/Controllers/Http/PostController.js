"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Post = use("App/Models/Post");

/**c
 * Resourceful controller for interacting with posts
 */
class PostController {
  /**
   * Show a list of all posts.
   * GET posts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ params, request, response, view }) {
    const posts = Post.query()
      .orderBy("created_at", "desc")
      .with("user")
      .with("likes")
      .with("shares")
      .withCount("likes")
      .withCount("shares")
      .withCount("comments")
      .paginate(request.input("page"), 5);
    return posts;
  }

  /**
   * Show a list of all posts.
   * SHOW posts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ request, auth }) {
    const posts = Post.query()
      .where("user_id", auth.current.user.id)
      .orderBy("created_at", "desc")
      .with("user")
      .paginate(request.input("page"), 5);
    return posts;
  }

  /**
   * Create/save a new Post.
   * POST posts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response, auth }) {
    const { id } = auth.user;
    const data = request.only(["content"]);

    const post = await Post.create({ ...data, user_id: id });

    const posts = Post.query()
      .where("id", post.id)
      .orderBy("created_at", "desc")
      .with("user")
      .with("likes")
      .with("shares")
      .withCount("likes")
      .withCount("shares")
      .withCount("comments")
      .fetch();
    return posts;
  }
}

module.exports = PostController;

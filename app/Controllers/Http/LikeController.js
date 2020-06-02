"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Like = use("App/Models/Like");

/**
 * Resourceful controller for interacting with likes
 */
class LikeController {
  /**
   * Show a list of all likes.
   * GET likes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const likes = Like.query()
      .orderBy("created_at", "desc")
      .with("user")
      .fetch();
    return likes;
  }

  /**
   * Render a form to be used for creating a new like.
   * GET likes/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new like.
   * POST likes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response, auth }) {
    const { id } = auth.user;
    const data = request.only(["post_id"]);

    const like = await Like.create({
      post_id: data.post_id,
      user_id: id,
    });

    return like;
  }

  /**
   * Display a single like.
   * GET likes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing like.
   * GET likes/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update like details.
   * PUT or PATCH likes/:idconst user = await User.findOrFail(params.id);
      const profileImg = await Cloudinary.upload(request.file("profile_img"));
      user.merge({ profile_img: profileImg.url });
      await user.save();
      return user;
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a like with id.
   * DELETE likes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const like = await Like.findOrFail(params.id);
    await like.delete();
    return like;
  }
}

module.exports = LikeController;

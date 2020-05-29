"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Tweet = use("App/Models/Tweet");

/**c
 * Resourceful controller for interacting with tweets
 */
class TweetController {
  /**
   * Show a list of all tweets.
   * GET tweets
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ params, request, response, view }) {
    const tweets = Tweet.query()
      .orderBy("created_at", "desc")
      .with("user")
      .paginate(request.input("page"), 5);
    return tweets;
  }

  /**
   * Show a list of all tweets.
   * SHOW tweets
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ request, auth }) {
    const tweets = Tweet.query()
      .where("user_id", auth.current.user.id)
      .orderBy("created_at", "desc")
      .with("user")
      .paginate(request.input("page"), 5);
    return tweets;
  }

  /**
   * Create/save a new tweet.
   * POST tweets
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response, auth }) {
    const { id } = auth.user;
    const data = request.only(["content"]);

    const tweet = await Tweet.create({ ...data, user_id: id });
    await tweet.load("user");
    return tweet;
  }
}

module.exports = TweetController;

"use strict";

const User = use("App/Models/User");
const Cloudinary = use("App/Services/Cloudinary");

class UserController {
  async index({ params, request, response, view, auth }) {
    const user = await User.findOrFail(auth.current.user.id);
    return user;
  }

  async create({ request }) {
    const data = request.only(["username", "email", "password"]);

    const user = await User.create(data);

    return user;
  }
  /**
   * Display a single tweet.
   * GET tweets/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view, auth }) {
    const user = await User.findOrFail(auth.current.user.id);
    return user;
  }

  /**
   * Update tweet details.
   * PUT or PATCH tweets/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    if (request.file("profile_img")) {
      const user = await User.findOrFail(params.id);
      const profileImg = await Cloudinary.upload(request.file("profile_img"));
      user.merge({ profile_img: profileImg.url });
      await user.save();
      return user;
    } else {
      const user = await User.findOrFail(params.id);
      const data = request.only("username");
      user.merge({ username: data.username });
      await user.save();
      return user;
    }
  }
}

module.exports = UserController;

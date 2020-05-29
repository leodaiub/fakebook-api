"use strict";

const User = use("App/Models/User");
const Cloudinary = use("App/Services/Cloudinary");

class UserController {
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
    if (request.file("profile_img") && request.file("cover_img")) {
      const user = await User.findOrFail(params.id);

      const coverImg = await Cloudinary.upload(request.file("cover_img"));
      const profileImg = await Cloudinary.upload(request.file("profile_img"));
      user.merge({ profile_img: profileImg.url, cover_img: coverImg.url });
      await user.save();
      return user;
    }
    return response.json({ status: false, data: "Please upload an Image." });
  }
}

module.exports = UserController;

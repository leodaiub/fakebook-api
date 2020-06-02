// "use strict";

// /** @typedef {import('@adonisjs/framework/src/Request')} Request */
// /** @typedef {import('@adonisjs/framework/src/Response')} Response */
// /** @typedef {import('@adonisjs/framework/src/View')} View */
// const Share = use("App/Models/Share");

// /**
//  * Resourceful controller for interacting with shares
//  */
// class ShareController {
//   /**
//    * Show a list of all shares.
//    * GET shares
//    *
//    * @param {object} ctx
//    * @param {Request} ctx.request
//    * @param {Response} ctx.response
//    * @param {View} ctx.view
//    */
//   async index({ request, response, view }) {
//     const shares = Share.query()
//       .orderBy("created_at", "desc")
//       .with("user")
//       .fetch();
//     return shares;
//   }

//   /**
//    * Render a form to be used for creating a new share.
//    * GET shares/create
//    *
//    * @param {object} ctx
//    * @param {Request} ctx.request
//    * @param {Response} ctx.response
//    * @param {View} ctx.view
//    */
//   async create({ request, response, view }) {}

//   /**
//    * Create/save a new share.
//    * POST shares
//    *
//    * @param {object} ctx
//    * @param {Request} ctx.request
//    * @param {Response} ctx.response
//    */
//   async store({ request, response, auth }) {
//     const { id } = auth.user;
//     const data = request.only(["content", "post_id"]);

//     const share = await Share.create({
//       post_id: data.post_id,
//       user_id: id,
//       content: data.content,
//     });

//     return share;
//   }

//   /**
//    * Display a single share.
//    * GET shares/:id
//    *
//    * @param {object} ctx
//    * @param {Request} ctx.request
//    * @param {Response} ctx.response
//    * @param {View} ctx.view
//    */
//   async show({ params, request, response, view }) {}

//   /**
//    * Render a form to update an existing share.
//    * GET shares/:id/edit
//    *
//    * @param {object} ctx
//    * @param {Request} ctx.request
//    * @param {Response} ctx.response
//    * @param {View} ctx.view
//    */
//   async edit({ params, request, response, view }) {}

//   /**
//    * Update share details.
//    * PUT or PATCH shares/:id
//    *
//    * @param {object} ctx
//    * @param {Request} ctx.request
//    * @param {Response} ctx.response
//    */
//   async update({ params, request, response }) {}

//   /**
//    * Delete a share with id.
//    * DELETE shares/:id
//    *
//    * @param {object} ctx
//    * @param {Request} ctx.request
//    * @param {Response} ctx.response
//    */
//   async destroy({ params, request, response }) {}
// }

// module.exports = ShareController;

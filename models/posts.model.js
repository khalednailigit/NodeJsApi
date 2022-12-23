const mongoose = require("mongoose");
const { user } = require("./users.model");
var ObjectId = Schema.ObjectId;
const post = mongoose.model(
  "users",
  mongoose.Schema(
    {
      title: String,
      description: String,
      images: { type: Array[String] },
      user: { type: ObjectId, ref: user },
    },
    { timestamps: true }
  )
);

module.exports = {
  post,
};

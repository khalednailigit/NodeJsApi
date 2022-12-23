const mongoose = require("mongoose");
const user = mongoose.model(
    "Users",
    mongoose.Schema(
      {
        username: {type:String},
        email:{type:String} ,
        password: {type:String} ,
        image: {type:String} ,
      },
      { timestamps: true }
    )
  );
  
  module.exports = {
    user,
  };
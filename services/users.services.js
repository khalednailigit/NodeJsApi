const { user } = require("../models/users.model");

async function createUser(params, callback) {
    if (!params.username) {
      return callback(
        {
          message: "username Required",
        },
        ""
      );
    }
  
    const userModel = new user(params);
    userModel
      .save()
      .then((response) => {
        return callback(null, response);
      })
      .catch((error) => {
        return callback(error);
      });
  }

  async function getUsers(params, callback) {
    const userid = params._id;
    var condition = productName
      ? { productName: { $regex: new RegExp(productName), $options: "i" } }
      : {};
  
    product
      .find(condition)
      .then((response) => {
        return callback(null, response);
      })
      .catch((error) => {
        return callback(error);
      });
  }

  module.exports = {
    createUser,
    getUsers
  };
  
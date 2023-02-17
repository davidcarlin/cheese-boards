const { Sequelize } = require("sequelize");
const { sequelize } = require("../db");

// create a User model
const User = sequelize.define("User", {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
});

module.exports = { User };

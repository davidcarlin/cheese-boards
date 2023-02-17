const { Sequelize } = require("sequelize");

// create a User model
const Cheese = sequelize.define("Cheese", {
  title: Sequelize.STRING,
  description: Sequelize.STRING,
});

module.exports = { User };

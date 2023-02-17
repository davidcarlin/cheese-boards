const { Sequelize } = require("sequelize");

// create a Board model
const Board = sequelize.define("Board", {
    type: Sequelize.STRING,
    description: Sequelize.STRING,
    rating: Sequelize.NUMBER,
});

module.exports = { Board };

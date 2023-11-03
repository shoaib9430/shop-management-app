const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define('items',{
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true,
    },
    name :{
        type : Sequelize.STRING,
    },
    price : {
        type : Sequelize.INTEGER,
    },
    description : {
        type : Sequelize.STRING,
    },
    quantity : {
        type : Sequelize.INTEGER,
    }
});

module.exports = Product;
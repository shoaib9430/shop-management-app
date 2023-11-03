const Sequelize = require('sequelize');
const sequelize = new Sequelize('shop-management','root','Raja9430@@##',{
    dialect : 'mysql',
    host : 'localhost',
});
module.exports = sequelize;

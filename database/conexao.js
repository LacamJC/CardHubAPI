const Sequelize = require('sequelize');

const sequelize = new Sequelize("railway", "root", "b53-66cA2bc214cffAgDcgh3dBAe-2f-", {
    dialect: "mysql",
    host: "viaduct.proxy.rlwy.net",
    port: 49332
})

module.exports = sequelize;
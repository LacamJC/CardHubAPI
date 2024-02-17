const Sequelize = require('sequelize');
const database = require('./conexao');

const appInfo = database.define('appInfo', {
    id:{
        type: Sequelize.STRING,
        // autoIncrement: true,
        primaryKey: true,
        // unique : true
    },

    url_img:{
        type: Sequelize.STRING,
        allowNull : false,
    },

    alt_txt:{
        type: Sequelize.STRING,
        allowNull: false
    },

    body_text:{
        type: Sequelize.TEXT,
        allowNull: false,
    },

    a_link:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    site_name:{
        type: Sequelize.STRING,
        unique: true
    },

    createdAt:{
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }, 

    updatedAt:{
        type: Sequelize.DATE,
        allowNulll: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        onUpdate: Sequelize.literal('CURRENT_TIMESTAMP')
    }
})

// appInfo.sync({force:true});

module.exports = appInfo;
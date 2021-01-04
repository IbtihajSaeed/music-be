'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = 'production';
const config = require('../config/config.js')[env];
const mysql = require('mysql2/promise');
const db = {};

let sequelize;

//database config and modal initialize

const dbInitialization=async(config)=>{
if (config) {
    let user=config.username;
    const {host, port,password,database} = config;
    const connection = await mysql.createConnection({ host, port, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
  sequelize = new Sequelize(config.database,user, config.password, config);
}
}


dbInitialization(config).then(()=>{
    fs
    .readdirSync(__dirname)
    .filter(file => {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
      const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
      db[model.name] = model;
    });
  
  
    Object.keys(db).forEach(modelName => {
      if (db[modelName].associate) {
        db[modelName].associate(db);
      }
    });
  
  db.sequelize = sequelize;
  db.Sequelize = Sequelize;
  
  
  
  db.sequelize.sync({force:false})
      .then(() => {
          console.log("Models Synced")
      })
      .catch(err => console.log(err));

    
})



module.exports = db;

'use strict';

const {
  Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Songs extends Model {
    static associate(models) {
        // define association here
       
        Songs.belongsToMany(models.PlayList, { through: 'PlayListSongs',foreignKey: 'songId' });
        Songs.belongsTo(models.Genre,{
            foreignKey:'genre'
          })
      }

  };

  Songs.init({
    name: DataTypes.STRING,
    length:DataTypes.INTEGER,
    artist:DataTypes.STRING,
    url:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Songs',
  });
 

  return Songs;
};
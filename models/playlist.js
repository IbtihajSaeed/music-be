'use strict';

const {
  Model
} = require('sequelize');
const Songs = require('./songs');

module.exports = (sequelize, DataTypes) => {
  class PlayList extends Model {
    static associate(models) {
        // define association here
        PlayList.belongsToMany(models.Songs, { through: 'PlayListSongs' ,foreignKey: 'playlistId'});
        
      }
  };

  PlayList.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PlayList',
  });
  
  
  

  return PlayList;
};
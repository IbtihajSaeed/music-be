'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {};

  Genre.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Genre',
  });
  

  return Genre;
};
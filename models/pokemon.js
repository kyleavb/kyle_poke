'use strict';
module.exports = (sequelize, DataTypes) => {
  var pokemon = sequelize.define('pokemon', {
    name: DataTypes.STRING,
    picture_url: DataTypes.STRING,
    api_string: DataTypes.STRING
  }, {});
  pokemon.associate = function(models) {
    // associations can be defined here
  };
  return pokemon;
};
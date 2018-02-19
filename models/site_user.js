'use strict';
module.exports = (sequelize, DataTypes) => {
  var site_user = sequelize.define('site_user', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    favorite_pokemon: DataTypes.STRING,
    user_id: DataTypes.STRING,
    user_password: DataTypes.STRING
  }, {});
  site_user.associate = function(models) {
    // associations can be defined here
  };
  return site_user;
};
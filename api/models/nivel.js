'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nivel extends Model {
    static associate(models) {
      Nivel.hasMany(models.Turma, {
        foreignKey: 'nivel_id'
      });
    }
  }
  Nivel.init({
    descr_nivel: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Nivel',
    tableName: 'nivel'
  });
  return Nivel;
};
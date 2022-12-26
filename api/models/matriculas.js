'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matriculas extends Model {
    static associate(models) {
      
    }
  }
  Matriculas.init({
    status: DataTypes.STRING,
    estudante_id: DataTypes.INTEGER,
    turma_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Matriculas',
  });
  return Matriculas;
};
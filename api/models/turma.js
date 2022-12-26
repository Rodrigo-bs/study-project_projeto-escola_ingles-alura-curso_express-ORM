'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Turma extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Turma.init({
    docente_id: DataTypes.INTEGER,
    data_inicio: DataTypes.DATEONLY,
    nivel_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Turma',
    tableName: 'turmas'
  });
  return Turma;
};
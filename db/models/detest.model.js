const { Model, DataTypes, Sequelize } = require('sequelize');

const DETEST_TABLE = 'detests';

const DetestSchema = {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      
      title: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: false,
      },
      
      info: {
        allowNull: false,
        type: DataTypes.STRING
      },
      
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
      }
}

class Detest extends Model {
    static associate() {
      // associate
    }

  
    static config(sequelize) {
      return {
        sequelize,
        tableName: DETEST_TABLE,
        modelName: 'Detest',
        timestamps: false
      }
    }
  }
  
  
  module.exports = { DETEST_TABLE, DetestSchema, Detest }

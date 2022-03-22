const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Milestone extends Model {}

Milestone.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    milestone: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    project_id: {
      type: DataTypes.INTEGER,
      references: {
      model: 'project',
      key: 'id',
          },
      }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'milestone',
  }
);

module.exports = Milestone;

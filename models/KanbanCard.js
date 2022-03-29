const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class KanbanCard extends Model {}

KanbanCard.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    column: {
        type: DataTypes.STRING
    },
    content: {
      type: DataTypes.STRING,
    },
    creator_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'employee',
        key: 'id',
      },
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
    modelName: 'kanban_card',
  }
);

module.exports = KanbanCard;

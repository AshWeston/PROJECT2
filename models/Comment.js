const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.STRING,
    },
    
    commenter_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'employee',
        key: 'id',
      },
    },
    question_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'question',
          key: 'id',
        },
      }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;

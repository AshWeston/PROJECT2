const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Employee extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Employee.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
        },
    first_name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
        },

    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        
        },
    account_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
        },

      
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8],
            }   ,
        },
        
    contribution: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
        unique: true
        },

    is_manager: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        },

    role_id: {
        type: DataTypes.INTEGER,
        references: {
        model: 'role',
        key: 'id',
            },
        },

    team_id: {
        type: DataTypes.INTEGER,
        references: {
        model: 'team',
        key: 'id',
            },
        }
  },
  {
    hooks: {
      beforeCreate: async (newEmployeeData) => {
        newEmployeeData.password = await bcrypt.hash(newEmployeeData.password, 10);
        return newEmployeeData;
      },
      beforeUpdate: async (updatedEmployeeData) => {
        updatedEmployeeData.password = await bcrypt.hash(updatedEmployeeData.password, 10);
        return updatedEmployeeData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'employee',
  }
);

module.exports = Employee;

const Comment = require('./Comment');
const Employee = require('./Employee');
const Milestone = require('./Milestone');
const Project = require('./Project');
const Question = require('./Question');
const Role = require('./Role');
const Team = require('./Team')


Employee.hasMany(Project, { foreignKey: 'creator_id'});

module.exports = { Employee, Milestone,Project,Question,Role,Team, Comment };

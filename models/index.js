const Comment = require('./Comment');
const Employee = require('./Employee');
const Milestone = require('./Milestone');
const Project = require('./Project');
const Question = require('./Question');
const Role = require('./Role');
const Team = require('./Team')

Team.hasMany(Employee);
Employee.belongsTo(Team)
Employee.hasMany(Project)
module.exports = { Employee, Milestone,Project,Question,Role,Team, Comment };

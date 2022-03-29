const Comment = require('./Comment');
const Employee = require('./Employee');
const Milestone = require('./Milestone');
const Project = require('./Project');
const Question = require('./Question');
const Role = require('./Role');
const Team = require('./Team')
const Kanban = require('./KanbanCard')

Employee.hasMany(Project, { foreignKey: 'creator_id'});
Kanban.belongsTo(Employee, { foreignKey: 'creator_id'});
module.exports = { Employee, Milestone,Project,Question,Role,Team, Comment, Kanban};

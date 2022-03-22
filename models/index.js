const Comment = require('./Comment');
const Employee = require('./Employee');
const Milestone = require('./Milestone');
const Project = require('./Project');
const Question = require('./Question');
const Role = require('./Role');
const Team = require('./Team')

Employee.hasOne(Role, {
    foreignKey: 'employee_id',
    onDelete: 'CASCADE'
});

Role.belongsTo(Employee, {
    onDelete: 'CASCADE'
});

Employee.belongsTo(Team, {
    foreignKey: 'team_id'
});

Team.hasMany(Employee);

Comment.hasOne(Employee, {
    foreignKey: 'commenter_id'
});

Employee.hasMany(Comment, {
    onDelete: 'CASCADE',
});

Question.hasMany(Comment, {
    foreignKey: 'question_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Question);

Milestone.belongsTo(Project, {
    foreignKey: 'project_id'
});

Project.hasMany(Milestone, {
    onDelete: 'CASCADE'
});

Project.belongsTo(Team, {
    foreignKey: 'team_id'
});

Team.hasMany(Project, {
    onDelete: 'CASCADE'
});

Question.belongsTo(Employee, {
    foreignKey: 'employee_id'
});

Employee.hasMany(Question, {
    onDelete: 'CASCADE'
})

module.exports = { Employee, Milestone,Project,Question,Role,Team, Comment };

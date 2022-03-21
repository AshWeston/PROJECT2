const sequelize = require('../config/connection');
const { Comment, Employee, Milestone, Project, Question, Role, Team } = require('../models');

const commentData = require('./commentData.json');
const employeeData = require('./employeeData.json');
const milestoneData = require('./milestoneData.json');
const projectData = require('./projectData.json');
const questionData = require('./questionData.json');
const roleData = require('./roleData.json');
const teamData = require('./teamData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true })

    await Comment.bulkCreate(commentData);
    await Employee.bulkCreate(employeeData);
    await Milestone.bulkCreate(milestoneData);
    await Project.bulkCreate(projectData);
    await Question.bulkCreate(questionData);
    await Role.bulkCreate(roleData);
    await Team.bulkCreate(teamData);

    process.exit(0);
}

seedDatabase();
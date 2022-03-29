const sequelize = require('../config/connection');
const { Answer, Employee, Milestone, Project, Question, Role, Team, Kanban } = require('../models');

const answerData = require('./answerData.json');
const employeeData = require('./employeeData.json');
const milestoneData = require('./milestoneData.json');
const projectData = require('./projectData.json');
const questionData = require('./questionData.json');
const roleData = require('./roleData.json');
const teamData = require('./teamData.json');
const kanbanData = require('./kabanData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true })
    await Answer.bulkCreate(answerData);
    await Team.bulkCreate(teamData);
    await Employee.bulkCreate(employeeData);
    await Project.bulkCreate(projectData);
    await Milestone.bulkCreate(milestoneData);
    await Question.bulkCreate(questionData);
    await Role.bulkCreate(roleData);
    await Kanban.bulkCreate(kanbanData);
    process.exit(0);
}

seedDatabase();
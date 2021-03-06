const sequelize = require('../config/connection');
const { Comment, Employee, Milestone, Project, Question, Role, Team, Kanban } = require('../models');

const commentData = require('./commentData.json');
const employeeData = require('./employeeData.json');
const milestoneData = require('./milestoneData.json');
const projectData = require('./projectData.json');
const questionData = require('./questionData.json');
const roleData = require('./roleData.json');
const teamData = require('./teamData.json');
const kanbanData = require('./kabanData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true })
    await Comment.bulkCreate(commentData);
    await Team.bulkCreate(teamData);
    const employees = await Employee.bulkCreate(employeeData, {
        individualHooks: true,
        returning: true,
      });
    await Project.bulkCreate(projectData);
    await Milestone.bulkCreate(milestoneData);
    await Question.bulkCreate(questionData);
    await Role.bulkCreate(roleData);
    await Kanban.bulkCreate(kanbanData);
    process.exit(0);
}

seedDatabase();
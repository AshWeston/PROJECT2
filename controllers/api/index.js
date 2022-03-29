const router = require("express").Router();

const userRoutes = require("./userRoutes");
const questionRoutes = require("./questionRoutes");
const projectRoute= require('./projectRoute');
const teamRoutes = require('./teamRoute')
const kanbanRoutes = require('./kanbanRoute')
router.use("/users", userRoutes);
router.use("/", questionRoutes);

// '/api/projects' breakpoint
router.use('/projects', projectRoute);
// '/api/teams' breakpoint
router.use('/teams', teamRoutes);
// '/api/kanban' breakpoint
router.use('/kanban', kanbanRoutes);

module.exports = router;



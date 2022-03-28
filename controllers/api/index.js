const router = require("express").Router();

const userRoutes = require("./userRoutes");
const questionRoutes = require("./questionRoutes");
const projectRoute= require('./projectRoute');
const teamRoutes = require('./teamRoute')

router.use("/users", userRoutes);
router.use("/", questionRoutes);

// '/api/projects' breakpoint
router.use('/projects', projectRoute);
// '/api/teams' breakpoint
router.use('/teams', teamRoutes);

module.exports = router;



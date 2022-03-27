const router = require('express').Router();
// const userRoutes = require('./userRoute');
const projectRoute= require('./projectRoute');
const teamRoutes = require('./teamRoute')
// '/api/users' breakpoint
// router.use('/users', userRoutes);

// '/api/projects' breakpoint
router.use('/projects', projectRoute);
// '/api/teams' breakpoint
router.use('/teams', teamRoutes);

module.exports = router;
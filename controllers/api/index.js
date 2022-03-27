const router = require('express').Router();
// const userRoutes = require('./userRoute');
const projectRoute= require('./projectRoute');
// '/api/users' breakpoint
// router.use('/users', userRoutes);
router.use('/projects', projectRoute);

module.exports = router;
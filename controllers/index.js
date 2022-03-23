
const router = require('express').Router();

// const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// '/' breakpoint
router.use('/', homeRoutes);

// '/api' breakpoint
// router.use('/api', apiRoutes);

module.exports = router;
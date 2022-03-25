
const router = require('express').Router();
const homeRoutes = require('./homeRoutes');

// '/' breakpoint
router.use('/', homeRoutes);


module.exports = router;
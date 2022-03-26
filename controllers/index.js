
const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const apiRouts - require('./api');

// '/' breakpoint
router.use('/', homeRoutes);

router.use('/api', apiRoutes);


module.exports = router;
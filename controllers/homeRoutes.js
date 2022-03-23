const { route } = require('express/lib/application');

const router = require('express').Router();

// '/' breakpoint
router.get('/', async (req, res) => {
    try {
        // res.sendFile(path.join(__dirname, '../template.html'));
        res.render('login', {
          });
    } catch (err) {
        res.status(500).json(err);
    }

});

// '/login' breakpoint
// router.get('/login', async (req, res) => {
//     res.sendFile(path.join(__dirname, //login page
//     ));
// });

// // '/project' breakpoint
// route.get('/project',async (req, res) => {
//     res.sendFile(path.join(__dirname, //project page
//     ));
// });

// // '/team' breakpoint
// route.get('/team',async (req, res) => {
//     res.sendFile(path.join(__dirname, //team page
//     ));
// });

module.exports = router;
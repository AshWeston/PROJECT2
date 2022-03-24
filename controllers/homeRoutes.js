const router = require('express').Router();
const withAuth = require('../utils/auth');

// '/question' breakpoint
router.get('/question', withAuth, async (req, res) => {
    try {
        const userData = await Employee.findByPk(req.session.user_id, {
            attributes: {exclude: ['password']},
        });
        const user = userData.get({plain: true});
        res.render('question', {
            ...user,
            logged_in: true
          });
    } catch (err) {
        res.status(500).json(err);
    }

});

// '/dashboard' breakpoint
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const userData = await Employee.findByPk(req.session.user_id, {
            attributes: {exclude: ['password']},
        });
        const user = userData.get({plain: true});
        res.render('dashboard', {
            ...user,
            logged_in: true
          });
    } catch (err) {
        res.status(500).json(err);
    }

});


// everything breakpoint
router.get('*', withAuth, async (req, res) => {
    try {
        const userData = await Employee.findByPk(req.session.user_id, {
            attributes: {exclude: ['password']},
        });
        const user = userData.get({plain: true});
        res.render('homepage', {
            ...user,
            logged_in: true
          });
    } catch (err) {
        res.status(500).json(err);
    }

});

module.exports = router;
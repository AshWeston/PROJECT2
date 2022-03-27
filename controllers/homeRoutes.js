const { route } = require('express/lib/application');
const { Employee, Project, Team } = require('../models');

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

// '/dashboard' breakpoint
router.get('/dashboard/:id',async (req, res) => {
    try {
        const employeeData = await Employee.findByPk(req.params.id);
        const employeeTeam = await Team.findByPk(employeeData.team_id, {
            include:[{model:Project}]
        });
        const teamData = await Team.findAll();
        const employee = employeeTeam.get({plain:true});
        const teams = teamData.map((team) => team.get({ plain: true }));
        console.log(employee,teams);
        res.render('dashboard',{employee,teams});
        // res.status(200).json({employeeTeam,teamData});
    } catch (err) {
        res.status(500).json(err);
    }
});

// // '/team' breakpoint
// router.get('/team',async (req, res) => {
//     res.sendFile(path.join(__dirname, //team page
//     ));
// });

module.exports = router;
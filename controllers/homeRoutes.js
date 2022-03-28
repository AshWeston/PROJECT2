const { Employee, Project, Team } = require('../models');
const router = require("express").Router();
const withAuth = require("../utils/auth");

// '/question' breakpoint
router.get("/question", async (req, res) => {
  try {
    // the user data 
    const userData = await Employee.findOne({ 
      where: {id: req.session.user_id },
      // attributes: { exclude: ['password'] }
    });

    // //the question data (need fixes maybe)
    // const questionData = await Question.findAll();


    const user = userData.get({ plain: true });
    // const question = questionData.map((question) => question.get({ plain: true }));

    res.render("question", {
      ...user,
      // ...question,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// '/dashboard' breakpoint
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const employeeData = await Employee.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });
    const teamData = await Team.findAll();
    const employee = employeeData.get({plain:true});
    const teams = teamData.map((team) => team.get({ plain: true }));
    console.log(employee,teams);
    res.render('dashboard',{
      employee,
      teams,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// '/answer' breakpoint
router.get("/answer", withAuth, async (req, res) => {
  try {
    res.render("answer", {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// everything breakpoint
router.get("/signup", async (req, res) => {
  try {
    res.render("signup");
  } catch (err) {
    res.status(500).json(err);
  }
});
// ADDED
router.get('/login', (req, res) => {
  // If session.logged_in = true then redirect to "/"
  if(req.session.logged_in) {
    res.redirect('/');
    return;
  }
  // else it will load the login handlebar
  res.render('login');
});
// ADDED
router.get("/", async (req, res) => {
  try {
    res.render("home", {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// '/dashboard' breakpoint
router.get('/dashboard',async (req, res) => {
    try {
        const employeeData = await Employee.findByPk(req.session.user_id, {
          attributes: { exclude: ['password'] },
          include: [{ model: Project }],
        });
        const teamData = await Team.findAll();
        const employee = employeeData.get({plain:true});
        const teams = teamData.map((team) => team.get({ plain: true }));
        console.log(employee,teams);
        res.render('dashboard',{employee,teams});
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;

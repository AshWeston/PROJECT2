const router = require("express").Router();
const withAuth = require("../utils/auth");

// '/question' breakpoint
router.get("/question", withAuth, async (req, res) => {
  try {
    // the user data 
    const userData = await Employee.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });

    // the question data (need fixes maybe)
    const questionData = await Question.findByPk(req.session.user_id, {
      attributes: {question},
    });


    const user = userData.get({ plain: true });
    const question = questionData.get({ plain: true });

    res.render("question", {
      ...user,
      ...question,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// '/dashboard' breakpoint
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const userData = await Employee.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });

    // the question data (need fixes maybe)
    const projectData = await Project.findByPk(req.session.user_id, {
      attributes: {project},
    });


    const user = userData.get({ plain: true });
    const project = projectData.get({ plain: true });
    res.render("dashboard", {
      ...user,
      ...project,
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

module.exports = router;

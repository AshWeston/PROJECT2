const router = require("express").Router();
const { Employee, Question } = require("../models");
const withAuth = require("../utils/auth");

// //middleware checking login status
// router.use(withAuth);

// '/question' breakpoint
router.get("/question", withAuth, async (req, res) => {
  try {
    // the user data 
    const userData = await Employee.findOne({ 
      where: {id: req.session.user_id },
      attributes: { exclude: ['password'] }
    });

    // //the question data (need fixes maybe)
    // const questionData = await Question.findAll();
    const questionData = await Question.findAll();

    const question = questionData.map(que => que.get({ plain: true}));
    res.render('question', {
      question,
      employee_id: req.session.user_id,
      logged_in: req.session.logged_in
    });
  } catch(err) {
    res.status(500).json(err);
  }
});


// '/answer' breakpoint
router.get("/answer", async (req, res) => {
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

module.exports = router;

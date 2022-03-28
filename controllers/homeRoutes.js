const router = require("express").Router();
const req = require("express/lib/request");
const { Question } = require("../models/");
const withAuth = require("../utils/auth");

// '/question' breakpoint
router.get("/question", withAuth, async (req, res) => {
  try {
    
    res.render("question", {
      // question,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// '/dashboard' breakpoint
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    res.render("dashboard", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// '/answer' breakpoint
router.get("/answer", withAuth, async (req, res) => {
  try {
    res.render("answer", {
      logged_in: req.session.logged_in,
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
router.get("/login", (req, res) => {
  // If session.logged_in = true then redirect to "/"
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  // else it will load the login handlebar
  res.render("login");
});
// ADDED
router.get("/", async (req, res) => {
  try {
    res.render("home", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

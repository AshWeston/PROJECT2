const router = require("express").Router();
const req = require("express/lib/request");
const withAuth = require("../utils/auth");

// '/question' breakpoint
router.get("/question", async (req, res) => {
  try {
    res.render("question");
  } catch (err) {
    res.status(500).json(err);
  }
});

// '/dashboard' breakpoint
router.get("/dashboard", async (req, res) => {
  try {
    res.render("dashboard");
  } catch (err) {
    res.status(500).json(err);
  }
});

// everything breakpoint
router.get("*", async (req, res) => {
  try {
    res.render("signup");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

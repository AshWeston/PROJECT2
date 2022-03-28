const router = require("express").Router();
const { Question } = require("../../models");
const withAuth = require("../../utils/auth"); // only authenticated users can post questions

router.post("/question", async (req, res) => {
  try {
    const newQuestion = await Question.create({
      ...req.body,
      employee_id: req.session.user_id
    });

    res.status(200).json(newQuestion);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

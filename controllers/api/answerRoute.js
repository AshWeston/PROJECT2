const router = require("express").Router();
const { Answer } = require("../../models");
const withAuth = require("../../utils/auth"); 

router.post("/answer/:id", withAuth, async (req, res) => {

  try {
    const newQuestion = await Answer.create({
      ...req.body,
      employee_id: req.session.user_id,
      question_id: req.params.id
    });

    res.status(200).json(newQuestion);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

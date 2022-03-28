const router = require("express").Router();
const { Question } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/question", withAuth, async (req, res) => {
  try {
    const newQuestion = await Question.create({
      ...req.body,
      employee_id: req.session.user_id,
    });

    const questionData = await Question.findAll({

    });
    const question = questionData.map(el => el.get({
      plain: true
    }))
   

    res.status(200).json(question);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

module.exports = router;

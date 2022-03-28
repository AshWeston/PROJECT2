const router = require("express").Router();
const { Question } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/question", withAuth, async (req, res) => {
  try {
    const newQuestion = await Question.create({
      ...req.body,
      employee_id: req.session.user_id,
    });

    const questionData = await Question.findAll({});
    const question = questionData.map((el) =>
      el.get({
        plain: true,
      })
    );

    res.status(200).json(question);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.delete("/question", withAuth, async (req, res) => {
  try {
    const deleteQuestion = await Question.destroy({
      where: {
        ...req.body,
        employee_id: req.session.user_id,
      },
    });

    res.status(200).json(deleteQuestion);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

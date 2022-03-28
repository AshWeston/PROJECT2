console.log ("ANSWER TEST")

const router = require("express").Router();
const { Answer } = require("../../models");
const withAuth = require("../../utils/auth"); 

router.post("/answer", withAuth, async (req, res) => {

  try {
    const newQuestion = await Answer.create({
      ...req.body,
      employee_id: req.session.user_id,
    });

    res.status(200).json(newQuestion);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

const router = require('express').Router();
const {Team} = require('../../models/');

router.get('/', async (req, res) => {
  try {
    const newTeam = await Team.findAll();
    res.status(200).json(newTeam);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
    try {
      console.log(req.body);
      const newTeam = await Team.create({
        team_name : req.body.team_name
      });
      res.status(200).json(newTeam);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  module.exports = router;
  
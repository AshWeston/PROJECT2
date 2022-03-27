const router = require('express').Router();
const {Team} = require('../../models/');

router.post('/', async (req, res) => {
    try {
        console.log('get team request received')
        console.log(req.body)
        const teamData = await Team.findOne(
            {
            where: {team_name:req.body.team_name},
            }
        );
      res.status(200).json(teamData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;
  
const router = require('express').Router();
const {Project,Employee} = require('../../models/');


router.get('/:id',async (req, res) => {
  try {
      const employeeData = await Employee.findByPk(req.params.id);
      const employeeTeam = await Team.findByPk(employeeData.team_id, {
          include:[{model:Project}]
      });
      const teamData = await Team.findAll();
      // const employee = employeeTeam.get({plain:true});
      // const teams = teamData.map((team) => team.get({ plain: true }));
      // res.render('dashboard',{employee,teams});
      res.status(200).json(employeeTeam);
  } catch (err) {
      res.status(500).json(err);
  }
});


router.post('/', async (req, res) => {
    try {
      const newProject = await Project.create({
        ...req.body,
      });
  
      res.status(200).json(newProject);
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.put('/:id', async(req, res) => {
  // update project
  try {
    const request = req.body.request;
    console.log(request);
    const projectData = await Project.update(request, {
      where: {
        id: req.params.id,
      },
    });
    res.json(projectData)
  }
  catch(err)  {
      console.log(err);
      res.status(400).json(err);
    };
});
module.exports = router;

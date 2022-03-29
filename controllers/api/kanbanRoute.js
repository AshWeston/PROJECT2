const router = require('express').Router();
const {Project,Employee,Kanban} = require('../../models/');


router.post('/:id', async (req, res) => {
    try {
      console.log(req.session.user_id)
      const newKanban = await Kanban.create({
        ...req.body,
        creator_id: req.session.user_id,
        project_id:req.params.id
      });
    //   console.log(newKanban);
      res.status(200).json(newKanban);
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.put('/:id', async(req, res) => {
  // update kanban card
  try {
    const request = req.body.request;
    const kanbanData = await Kanban.update(
      {column: request}, 
      {
      where: {
        id: req.params.id,
      },
    });
    console.log(request);
    res.json(kanbanData)
  }
  catch(err)  {
      console.log(err);
      res.status(400).json(err);
    };
});


router.get("/projects/:id", async (req, res) => {
  try {
    const kanbanData = await Kanban.findAll({
      where: {
        project_id: req.params.id
      },
      include:[{
        model:Employee, attributes: { exclude: ['password'] },
      }]
    });;
    res.json(kanbanData)
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;


const { Employee, Project, Team, Kanban } = require('../models');
const router = require("express").Router();
const withAuth = require("../utils/auth");

// //middleware checking login status
// router.use(withAuth);

// '/question' breakpoint
router.get("/question", withAuth, async (req, res) => {
  try {
    // the user data 
    const userData = await Employee.findOne({ 
      where: {id: req.session.user_id },
      attributes: { exclude: ['password'] }
    });

    // //the question data (need fixes maybe)
    // const questionData = await Question.findAll();
    const questionData = await Question.findAll();

    const question = questionData.map(que => que.get({ plain: true}));
    res.render('question', {
      question,
      employee_id: req.session.user_id,
      logged_in: req.session.logged_in
    });
  } catch(err) {
    res.status(500).json(err);
  }
});

// '/dashboard' breakpoint
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const employeeData = await Employee.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });
    const allEmployeeData = await Employee.findAll();
    const teamData = await Team.findAll();
    const employee = employeeData.get({plain:true});
    const teams = teamData.map((team) => team.get({ plain: true }));
    const employees = allEmployeeData.map((employee) => employee.get({ plain: true }));
    console.log(employee,teams);
    res.render('dashboard',{
      employee,
      employees,
      teams,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// '/projects/:id' breakpoint
router.get("/projects/:id", withAuth, async (req, res) => {
  try {
    const kanbanData = await Kanban.findAll({
      where: {
        project_id: req.params.id
      },
      include:[{
        model:Employee, attributes: { exclude: ['password'] },
      }]
    });;
    let todo = [];
    let inProgress = [];
    let done = [];
    for (let i =0;i<kanbanData.length;i++) {
      if (kanbanData[i].column == "To do"){
        todo.push(kanbanData[i])
      }else if (kanbanData[i].column == "In progress") {
        inProgress.push(kanbanData[i])
      }else if (kanbanData[i].column == "Done") {
        done.push(kanbanData[i])
      };
    }
    const projectID = req.params.id;
    const todoCards = todo.map((card) => card.get({ plain: true }));
    const inProgressCards = inProgress.map((card) => card.get({ plain: true }));
    const doneCards = done.map((card) => card.get({ plain: true }));
    res.render('kanban',{
      projectID,
      todoCards,
      inProgressCards,
      doneCards,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// '/answer' breakpoint
router.get("/answer", async (req, res) => {
  try {
    res.render("answer", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// everything breakpoint
router.get("/signup", async (req, res) => {
  try {
    res.render("signup");
  } catch (err) {
    res.status(500).json(err);
  }
});
// ADDED
router.get("/login", (req, res) => {
  // If session.logged_in = true then redirect to "/"
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  // else it will load the login handlebar
  res.render("login");
});
// ADDED
router.get("/", async (req, res) => {
  try {
    res.render("home", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// '/dashboard' breakpoint
router.get('/dashboard',async (req, res) => {
    try {
        const employeeData = await Employee.findByPk(req.session.user_id, {
          attributes: { exclude: ['password'] },
          include: [{ model: Project }],
        });
        const teamData = await Team.findAll();
        const employee = employeeData.get({plain:true});
        const teams = teamData.map((team) => team.get({ plain: true }));
        console.log(employee,teams);
        res.render('dashboard',{employee,teams});
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;

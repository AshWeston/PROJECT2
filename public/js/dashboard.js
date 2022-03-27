const table = document.querySelector('.table');
const editForm = table.nextElementSibling;
let formID;
const toggleElement = (form) => {
    if (form.classList.contains('hidden')) {
        form.classList.remove("hidden");
    }else form.classList.add("hidden")
}

const createProjectFormHandler = async (event) => {
  event.preventDefault();
  event.stopPropagation();
  const form = event.target;
  // Collect values from the new post form
  const project_name = form.querySelector('#project_name').value;
  const start_date = form.querySelector('#start_date').value;
  const end_date = form.querySelector('#end_date').value;
  const team_name = form.querySelector('#team').value;
  const teamData = await fetchTeamID(team_name);
  const team_id = teamData.id
  if (project_name && start_date && end_date ) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/projects', {
      method: 'POST',
      body: JSON.stringify({ project_name, start_date, end_date, team_id}),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      // If successful, reload current page
      document.location.replace('/dashboard/1');
    } else {
      alert('Fail to create project');
    }
  }
};

const fetchTeamID = async (team_name) => {
  const teamData = await fetch('../api/teams', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({team_name}),
  })
  return teamData.json();
}


const EditFormHandler = async(event) => {
  event.preventDefault();
  event.stopPropagation();
  const form = event.target;
  let request = {}
  // Collect values from the new post form
  const start_date = form.querySelector('#start_date').value;
  if (start_date !== "") {
    request.start_date = start_date;
  }
  const end_date = form.querySelector('#end_date').value;
  if (end_date !== "") {
    request.end_date = end_date;
  }
  const team_name = form.querySelector('#team').value;
  if (team_name !== "") {
    const teamData = await fetchTeamID(team_name);
    request.team_id = teamData.id;
  }
  console.log(request);
  const response = await fetch(`/api/projects/${formID}`, {
    method: 'PUT',
    body: JSON.stringify({request}),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    // If successful, reload current page
    document.location.replace('/dashboard/1');
  } else {
    alert('Fail to create project');
  }
}

// open create project form from create project button
const createProjectBtn = document.querySelector('#create-project')
createProjectBtn.addEventListener('click', (event) => {
    const clickedBtn = event.target;
    const form = clickedBtn.nextElementSibling;
    toggleElement(form)
    })

// close form
const cancelBtn = document.querySelectorAll('.cancelBtn')
cancelBtn.forEach((currentBtn) => {
  currentBtn.addEventListener('click', (event) => {
    const clickedBtn = event.target;
    const form = clickedBtn.parentNode.parentNode.parentNode;
    toggleElement(form)
  })
})

// display table after cancel edit 
const cancelEditBtn = document.querySelector('.cancelEditBtn')
cancelEditBtn.addEventListener('click', (event) => {
    
    toggleElement(table)
    toggleElement(editForm)
    })
// display update project form
const editBtn = document.querySelectorAll('.editBtn')
editBtn.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    formID = event.target.dataset.id
    console.log(formID);
    toggleElement(table);
    toggleElement(editForm);
  })
})

// POST request to project model to create new project in database
document
    .querySelector('#create-project-form')
    .addEventListener('submit', createProjectFormHandler);

document
    .querySelector('#update-project-form')
    .addEventListener('submit', EditFormHandler);
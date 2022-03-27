const table = document.querySelector('.table');
const editForm = table.nextElementSibling;

function toggleElement(form) {
    if (form.classList.contains('hidden')) {
        form.classList.remove("hidden");
    }else form.classList.add("hidden")
}

const newProject = async (event) => {
  event.preventDefault();

  // Collect values from the new post form
  const project_name = document.querySelector('#project_name').value;
  const start_date = document.querySelector('#start_date').value;
  const end_date = document.querySelector('#end_date').value;

  if (project_name && start_date && end_date) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/projects', {
      method: 'POST',
      body: JSON.stringify({ project_name, start_date, end_date}),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      // If successful, reload current page
      document.location.replace('/dashboard');
    } else {
      alert('Fail to create project');
    }
  }
};



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
cancelEditBtn.addEventListener('click', () => {
    toggleElement(table)
    toggleElement(editForm)
    })
// display update project form
const editBtn = document.querySelectorAll('.editBtn')
editBtn.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    toggleElement(table);
    toggleElement(editForm);
  })
})

// POST request to project model to create new project in database
document
    .querySelector('#create-project-form')
    .addEventListener('submit', newProject);


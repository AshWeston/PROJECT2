function toggleElement(form) {
    if (form.classList.contains('hidden')) {
        form.classList.remove("hidden");
    }else form.classList.add("hidden")
}

const createProjectBtn = document.querySelector('#create-project')
createProjectBtn.addEventListener('click', (event) => {
    const clickedBtn = event.target;
    const form = clickedBtn.nextElementSibling;
    toggleElement(form)
    })

const cancelBtn = document.querySelectorAll('.cancelBtn')
cancelBtn.forEach((currentBtn) => {
  currentBtn.addEventListener('click', (event) => {
    const clickedBtn = event.target;
    const form = clickedBtn.parentNode.parentNode.parentNode;
    toggleElement(form)
  })
})



const editBtn = document.querySelectorAll('.editBtn')
editBtn.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    const clickedBtn = event.target;
    const table = clickedBtn.parentNode.parentNode.parentNode.parentNode;
    const form = table.nextElementSibling;
    toggleElement(table);
    toggleElement(form);
    console.log(form);
  })
})
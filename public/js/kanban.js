// import Sortable from 'sortablejs';


function toggleCardForm(form) {
    if (form.classList.contains('hidden')) {
        form.classList.remove("hidden");
    }else form.classList.add("hidden")
}

function addCard_FormHandler(event) {
    event.preventDefault()
    const activatedForm =event.target;
    createCard(activatedForm)
}

// create new card
async function createCard(form) {
    const content = form.querySelector('[name="body"]').value;
    // const columnTitle = form.parentNode.children[0];
    const newCardHTML = `<div class="card bg-green-600 text-gray-300 my-3 p-2">
    <p>${content}</p>
    <small>added by  </small>
  </div>
  ` 
    // add html segment to the board
    const list = form.parentNode.querySelector('.card-list')
    list.children[0].insertAdjacentHTML("afterend", newCardHTML);  
    toggleCardForm(form);

    // clear input field
    form.reset();

}

// drag n drop 
function dragItems(tagname) {
    const list = document.querySelector(`#${tagname}`);
    Sortable.create(list, {
      animation: 200,
      group: {
        name: "shared",
      },
      filter: "drag-ignore",
      sort: true
    });
  }







const addNoteBtn = document.querySelectorAll('.add-note')
addNoteBtn.forEach((currentBtn) => {
  currentBtn.addEventListener('click', (event) => {
    const clickedBtn = event.target;
    const form = clickedBtn.nextElementSibling;
    toggleCardForm(form)
  })
})

const cancelBtn = document.querySelectorAll('.cancelBtn')
cancelBtn.forEach((currentBtn) => {
  currentBtn.addEventListener('click', (event) => {
    const clickedBtn = event.target;
    const form = clickedBtn.parentNode.parentNode.parentNode;
    toggleCardForm(form)
  })
})

const cardForm = document.querySelectorAll('.add-card ')
cardForm.forEach((form) => {
    form.addEventListener('submit', (event) => addCard_FormHandler(event))
})

dragItems(`to-do`);
dragItems(`in-progress`);
// dragItems(`review`);
// dragItems(`done`);
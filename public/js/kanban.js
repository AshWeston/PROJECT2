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
    // add html segment to the board
    const list = form.parentNode.querySelector('.card-list')
    toggleCardForm(form);
    // clear input field
    form.reset();
    const column = list.dataset.column;
    const project_id = list.dataset.project_id;
    postCard(column,content,project_id)
}


// fetch POST request for new card to database
const postCard = async (column,content,project_id) => {
  const response = await fetch(`../api/kanban/${project_id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({column,content}),
  })
  if (response.ok) {
    // If successful, reload current page
    location.reload();
  } else {
    alert('Fail to create project');
  }
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
      sort: true,
      onAdd: function (event) {
        const card = event.item;
        const cardId = card.dataset.id;
        const newcolumn = event.item.parentNode.dataset.column
        // console.log(card)
        // console.log(cardId,newcolumn);
        updateCardColumn(cardId,newcolumn)
      }
    }
    );
  }
// fetch PUT request to card's new position to database 
const updateCardColumn = async (cardId,request) => {
  const teamData = await fetch(`../api/kanban/${cardId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({request}),
  })
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
dragItems(`done`);
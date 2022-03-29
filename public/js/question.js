const questionHandler = async () => {
  const question_title = document.querySelector("#question-title").value.trim();
  const question_contents = document.querySelector("#content").value.trim();

  if (question_title && question_contents) {
    const response = await fetch(`/api/question`, {
      method: "POST",
      body: JSON.stringify({ question_title, question_contents }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/question");
    } else {
      alert("Failed to create question");
    }
  }
};

document
  .querySelector("#question-form")
  .addEventListener("submit", questionHandler);

//DELETE QUESTION

const deleteQuestionHandler = async (event) => {
  event.preventDefault();
  const id = event.target.getAttribute('data-id');
  const response = await fetch(`/api/question/${id}`, {
      method: 'DELETE'
  });
  if (!response.ok) {
      alert('Failed to delete question');
  } else {
      document.location.reload();
  } 
}
const deleteBtn = document.querySelectorAll(".delete-btn")
  deleteBtn.forEach((currentBtn) => {
    currentBtn.addEventListener('click', deleteQuestionHandler);
    });


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

async function deleteQuestionHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`api/question`, {
    method: "DELETE",
    // body: JSON.stringify({question_title, question_contents}),
    // headers: {
    //   "Content-Type": "application/json",
    // },
  });

  if (response.ok) {
    document.location.replace("/question");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector("#deleteButton")
  .addEventListener("click", deleteQuestionHandler);

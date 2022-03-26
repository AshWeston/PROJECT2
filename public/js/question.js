const questionHandler = async function (event) {
  event.preventDefault();
  const questionTitle = document.querySelector("#question-title");
  const questionContent = document.querySelector("#content");
  console.log(questionTitle.value, questionContent.value);
  if (questionTitle && questionContent) {
    const response = await fetch(`/api/question`, {
      method: "POST",
      body: JSON.stringify({
        question_title: questionTitle.value, //need to create question_title in database
        question_contents: questionContent.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/question");
    } else {
      alert("Failed to create question");
    }
  }
};

document
  .querySelector("#createQuestion")
  .addEventListener("click", questionHandler);

const questionHandler = async function (event) {
  event.preventDefault();
  const questionTitle = document.querySelector("#question-title");
  const questionContent = document.querySelector("#content");
  
  if (questionTitle && questionContent) {
    console.log(questionTitle.value, questionContent.value);
    const response = await fetch(`/api/question`, {
      method: "POST",
      body: JSON.stringify({
        question_contents: questionContent.value,
        question_title: questionTitle.value, 
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/answer");
    } else {
      alert("Failed to create question");
    }
  }
};

document
  .querySelector("#createQuestion")
  .addEventListener("click", questionHandler);

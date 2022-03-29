async function answerFormHandler(event) {
  event.preventDefault();

  const answerText = document.querySelector("#answer").value.trim();

  if (answerText) {
    const response = await fetch("/api/answer", {
      method: "POST",
      body: JSON.stringify({
        answer_text: answerText.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
      document.querySelector("#comment-form").style.display = "block";
    }
  }
}

document
  .querySelector("#createAnswer")
  .addEventListener("click", answerFormHandler);

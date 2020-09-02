console.log("client side JS loaded");

const weatherForm = document.querySelector("form");
const searchTerm = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = searchTerm.value;
  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  fetch(`http://localhost:3000/weather?location=${location}`).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          return (messageOne.textContent = data.error);
        }
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      });
    }
  );
});

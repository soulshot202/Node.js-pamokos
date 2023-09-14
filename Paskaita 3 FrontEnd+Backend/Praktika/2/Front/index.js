const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");
const host = "http://localhost:3000";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = nameInput.value;
  const surname = surnameInput.value;
  sendData(name, surname);
});

async function sendData(name, surname) {
  try {
    const response = await fetch(host, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        surname: surname,
      }),
    });
    if (response.ok) {
      alert("Success");
    } else {
      alert("Error");
    }
  } catch (error) {
    console.log(error.message);
  }
}

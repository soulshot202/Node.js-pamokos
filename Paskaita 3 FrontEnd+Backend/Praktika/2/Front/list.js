const output = document.querySelector("ul");
const host = "http://localhost:3000";

async function getData() {
  try {
    const response = await fetch(host);
    if (response.ok) {
      const data = await response.json();
      output.innerHTML = "";
      data.forEach((ppl) => {
        postData(ppl);
      });
    } else {
      console.log("klaida");
    }
  } catch (error) {
    console.log(error.message);
  }
}
getData();

function postData(el) {
  const li = document.createElement("li");
  const name = el.name;
  const surname = el.surname;
  li.textContent = name + " " + surname;
  output.append(li);
}

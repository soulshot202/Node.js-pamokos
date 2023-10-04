const output = document.body;
const host = "http://localhost:8080/cars";
async function fetchData() {
  try {
    const response = await fetch(host);
    if (response.ok) {
      const data = await response.json();

      showData(data);
    } else {
      console.log("kazkokia klaida");
    }
  } catch (error) {
    console.log(error.message);
  }
}

fetchData();

function showData(data) {
  const ul = document.createElement("ul");

  data.forEach((el) => {
    const li = document.createElement("li");
    li.textContent = el;
    ul.append(li);
  });
  output.append(ul);
}

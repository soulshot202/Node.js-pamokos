const output = document.querySelector("#output");
const filter = document.querySelector("#ageFilter");
const HOST = "http://localhost:3000";

filter.addEventListener("click", fetchData);

async function fetchData() {
  output.innerHTML = "";
  if (filter.textContent === "Asc") {
    filter.textContent = "Dsc";

    try {
      const response = await fetch(`${HOST}/pets/byoldest/asc`);
      const data = await response.json();

      data.forEach((pet) => {
        addPetToHtml(pet);
      });
      filter.textContent = "Dsc";
    } catch (error) {
      console.log(error);
    }
  } else if (filter.textContent === "Dsc") {
    try {
      const response = await fetch(`${HOST}/pets/byoldest/dsc`);
      const data = await response.json();

      data.forEach((pet) => {
        addPetToHtml(pet);
      });
      filter.textContent = "Asc";
    } catch (error) {
      console.log(error);
    }
  }
}

function addPetToHtml(pet) {
  output.innerHTML += `<tr><td>${pet.name}</td><td>${pet.type}</td><td>${pet.age}</td></tr>`;
}

fetchData();

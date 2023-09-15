//import { json } from "body-parser";

const HOST = "http://localhost:3000/todo";

const container = document.querySelector("#todoContainer");

let todos = [];

async function getTodos() {
  try {
    const response = await fetch(HOST);
    if (response.ok) {
      const data = await response.json();
      todos = data;
    } else {
      alert("Error");
    }
  } catch (error) {
    console.log(error.message);
  }
}

function generateTodosHtml() {
  todos.forEach((todo) => {
    const todoContainer = document.createElement("div");
    const title = document.createElement("input");
    const description = document.createElement("input");
    title.value = todo.title;
    description.value = todo.description;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", async () => {
      if (confirm("Are you sure want to delete")) {
        try {
          const response = await fetch(HOST + `/${todo.id}`, {
            method: "DELETE",
          });
          if (response.ok) {
            todoContainer.remove();
          } else {
            alert(`Kazkas negerai`);
          }
        } catch (error) {
          console.log("error");
        }
      }
    });
    const updateBtn = document.createElement("button");
    updateBtn.textContent = "Update";
    updateBtn.addEventListener("click", async () => {
      try {
        const titleValue = title.value;
        const descriptionValue = description.value;

        const response = await fetch(HOST + `/${todo.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: titleValue,
            description: descriptionValue,
          }),
        });
        if (response.ok) {
          alert("todo updated");
        } else {
          alert("kazkas negerai");
        }
      } catch (error) {
        console.log("klaida");
      }
    });
    todoContainer.append(title, description, updateBtn, deleteBtn);

    container.append(todoContainer);
  });
}
await getTodos();
generateTodosHtml();

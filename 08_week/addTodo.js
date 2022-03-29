// 2. Sa permitem adaugarea unui TODO
import { createToDoServer } from "./api.js";

const toDoInput = document.getElementById("todo-input");
const toDoButton = document.getElementById("todo-button");

toDoButton.onclick = async function () {
  const newTodo = {
    name: toDoInput.value,
    completed: false
  }

  await createToDoServer(newTodo)
  location.reload();
}
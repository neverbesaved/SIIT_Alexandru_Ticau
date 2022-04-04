import getTodos from "../api.js";
import createTodo from "./createTodo.js";
import getDeleteButton from "../removeTodo.js";
import getCheckboxTodo from "../checkTodo.js";

const todosArray = [];
const container = document.getElementById("container")

async function displayTodos() {
  const todos = await getTodos();
  const ulHTML = document.createElement("ul");
  todos.forEach((todo) => {
    todosArray.push(todo);
    const itemHTML = createTodo(todo.name, todo.id);
    const deleteBtn = getDeleteButton(todo.id);
    const checkbox = getCheckboxTodo(todo.id);
    if(todo.completed == true){
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }
    itemHTML.appendChild(checkbox);
    itemHTML.appendChild(deleteBtn);
    ulHTML.appendChild(itemHTML);
  });
  container.appendChild(ulHTML);
}

export {todosArray};
export default displayTodos;

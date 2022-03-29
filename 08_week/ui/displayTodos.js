import getTodos from "../api.js"
import createTodo from "./createTodo.js"
import getDeleteButton from "../removeTodo.js"
import getCheckboxTodo from "../checkTodo.js"

async function displayTodos() {
  const todos = await getTodos()
  const ulHTML = document.createElement("ul");
 todos.forEach(todo => {
    const itemHTML = createTodo(todo.name, todo.id);
    const deleteBtn = getDeleteButton(todo.id);
    const checkbox = getCheckboxTodo(todo.id);
    itemHTML.appendChild(checkbox);
    itemHTML.appendChild(deleteBtn);
    ulHTML.appendChild(itemHTML);
  });
  document.body.appendChild(ulHTML)
}

export default displayTodos;
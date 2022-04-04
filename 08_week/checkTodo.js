import { baseUrl } from "./api.js";
import { todosArray } from "./ui/displayTodos.js";

function getCheckboxTodo(todoId) {
  console.log(todosArray);
  const result = todosArray.find(({ id }) => id === todoId);
  let resultObject = {
    completed: !result.completed
  }
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.addEventListener("click", async () => {
    await fetch(`${baseUrl}/todos/${todoId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", // ii spunem la server ca trimitem json
      },
      body: JSON.stringify(resultObject),
    });
    location.reload();
  });
  return checkbox;
}

export default getCheckboxTodo;

import {baseUrl} from "./api.js"

function getCheckboxTodo(todoId) {
    const checkbox = document.createElement("input")
    checkbox.setAttribute("type","checkbox")

    checkbox.addEventListener("click", async () => {
        await fetch(`${baseUrl}/todos/${todoId}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json' // ii spunem la server ca trimitem json
              },
            body: JSON.stringify(updateTodoData)
        });
        location.reload();
    })
    return checkbox
}

export default getCheckboxTodo
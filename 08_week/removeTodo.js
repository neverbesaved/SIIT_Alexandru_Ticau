import { baseUrl } from "./api.js";

function getDeleteButton(todoId) {
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "delete";

  deleteButton.addEventListener("click", async function () {
    await fetch(`${baseUrl}/todos/${todoId}`, {
      method: "DELETE",
    });
    location.reload();
  });

  return deleteButton;
}

export default getDeleteButton;

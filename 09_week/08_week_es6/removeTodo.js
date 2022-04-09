import { baseUrl } from "./api.js";

const getDeleteButton = (todoId) => {
  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "delete-button");
  deleteButton.innerHTML = "delete";

  deleteButton.addEventListener("click", async () => {
    await fetch(`${baseUrl}/todos/${todoId}`, {
      method: "DELETE",
    });
    location.reload();
  });

  return deleteButton;
};

export default getDeleteButton;

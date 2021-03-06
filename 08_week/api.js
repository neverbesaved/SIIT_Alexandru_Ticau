export const baseUrl = "http://localhost:3000";

const getTodos = async () => {
  const response = await fetch(`${baseUrl}/todos`);
  const todos = await response.json();
  return todos;
};

export const createToDoServer = async (newToDo) => {
  const response = await fetch(`${baseUrl}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // ii spunem la server ca trimitem json
    },
    body: JSON.stringify(newToDo),
  });

  return response.json();
};

export default getTodos;

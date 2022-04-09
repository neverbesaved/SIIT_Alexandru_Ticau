const createTodo = (text, id) => {
  const todoHtml = document.createElement("li");
  todoHtml.innerText = text;
  return todoHtml;
};

export default createTodo;

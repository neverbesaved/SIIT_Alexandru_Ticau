function createComment(userInput){
    let commentHTML = document.createElement("li");
    commentHTML.setAttribute('class', 'list-element')
    commentHTML.innerText = userInput;

    let deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute('class', 'delete-button')
    deleteButton.addEventListener('click',(event) =>{
        commentHTML.parentElement.removeChild(commentHTML);
    })
    commentHTML.appendChild(deleteButton);

    return commentHTML
}

const commentArray = [];

let ulHTML = document.createElement("ul");
commentArray.forEach(comment => {
    let itemHTML = createComment(comment);
    ulHTML.appendChild(itemHTML);
});
document.body.appendChild(ulHTML);

let commentInput = document.getElementById("comment-input");
let submitButton = document.getElementById("submit-button");

submitButton.onclick = function() {
    let newItem = createComment(commentInput.value);
    ulHTML.appendChild(newItem);
}
function createComment(userInput){
    let commentHTML = document.createElement("div");
    commentHTML.setAttribute('class', 'comment-element');

    let commentAvatar = document.createElement("img");
    commentAvatar.src = "./images/lmaocat.jfif";

    let commentParagraph = document.createElement("p");
    commentParagraph.innerText = userInput;

    let commentHeader = document.createElement("h1");
    commentHeader.innerText = "alex.ticau2102@gmail.com"

    let deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute('class', 'delete-button')
    deleteButton.addEventListener('click',(event) =>{
        commentHTML.parentElement.removeChild(commentHTML);
    })

    commentHTML.appendChild(commentAvatar)
    commentHTML.appendChild(commentHeader)
    commentHTML.appendChild(commentParagraph)
    commentHTML.appendChild(deleteButton);

    return commentHTML
}

let commentSection = document.getElementById("comments")
let commentInput = document.getElementById("comment-input");
let submitButton = document.getElementById("submit-button");

submitButton.onclick = function() {
    let newItem = createComment(commentInput.value);
    commentSection.appendChild(newItem);
}

// Functionalitatea butonului goTop 
const btnScrollToTop = document.getElementById("goTopButton");
btnScrollToTop.addEventListener("click",function(){
window.scrollTo({
top:0,
left:0,
behavior:"smooth"
});
});
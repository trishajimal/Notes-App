
const notesContainer = document.querySelector('.notes');
const createBtn = document.querySelector('button');
let notes = document.querySelectorAll('.input-box');

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
    showNotes();

function updateStorage() {
        localStorage.setItem("notes", notesContainer.innerHTML);
    }

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true"); 
    img.src = "delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);    
})

notesContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "IMG") {
        e.target.parentElement.remove();  
        updateStorage();
    }
    else if(e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onKeyup = function() {
                updateStorage();
            }
        });
    }
})

document.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        e.preventDefault();
        updateStorage();
    }

}) 
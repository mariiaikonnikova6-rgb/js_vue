let taskInput = document.querySelector('#taskInput');
let addBtn = document.querySelector('#addBtn');
let taskCounter = document.querySelector('#taskCounter');
let taskList = document.querySelector('#taskList');

function updateCounter(){
    let count = taskList.querySelectorAll('li').length;
    taskCounter.textContent = count;
}
function addTask(){
    // alert('Add task')
    let text = taskInput.value.trim();
    if (text === ""){
        alert("Please enter a text");
        return;
    }
    let li = document.createElement("Li")
    li.classList.add('Task');
    let span = document.createElement("span");
    span.classList.add("task-text");
    span.textContent = text;


    let doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";

    doneBtn.addEventListener("click", function(){
        li.classList.toggle("done");
    });

    let editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";

    editBtn.addEventListener("click", function (){
        let newText = prompt("Замінити завдання", span.textContent);

        if(newText === null){

            return;
        }
        if(newText.trim() === ''){
            alert("Завдання не може бути порожнє")
            return;
        }
        span.textContent = newText.trim()
    })

    let deleteBtn = document.createElement("button");
    editBtn.classList.add("delete-btn");
    editBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function (){
        let answer = confirm("Видалити це завдання?")
        if(answer){
            li.remove();
            updateCounter();
        }
    })

    li.append(span, doneBtn, editBtn, deleteBtn);
    taskList.append(li);
    updateCounter();
    taskInput.value = "";
}
addBtn.addEventListener("click", addTask);
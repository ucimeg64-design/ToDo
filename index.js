function addTask(){
    let taskListEl = document.getElementById("taskList");
    let inputEl = document.getElementById("taskInput");
    let li = document.createElement("li");
    li.innerText = inputEl.value;
    li.onclick = ()=> li.remove();
    taskListEl.appendChild(li);
    inputEl.value = "";
    let button = document.getElementById("nemehButton")
    button.style.backgroundColor = "green";
    button.style.color = "white";

}
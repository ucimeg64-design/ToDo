function addTask(){
    let taskListEl = document.getElementById("taskList");
    let inputEl = document.getElementById("taskInput");
    let li = document.createElement("li");
    li.classList.add("listDesign")
    li.innerText = inputEl.value;
    li.style.fontSize = "20px";
    li.onclick = ()=> li.remove();
    taskListEl.appendChild(li);
    inputEl.value = "";
    let button = document.getElementById("nemehButton")
    button.style.color = "white";

}


import todoClass from './todoClass.js';
import { fillTodoList } from './todoView.js'

//add event listener for tasks
document.getElementById("taskAdd").addEventListener("click", addTask);

//check if previous data is stored and output
if (localStorage.getItem("Todos") != '') {
   window.onload = fillTodoList(localStorage.getItem("Todos"));
}

//add task
function addTask() {
   //check if empty
   if (document.getElementById("taskContent").value.trim() != '') {
      //trim whitespace and send to class constructor
      let task = new todoClass(0, document.getElementById("taskContent").value.trim(), 0);
      let append = task.buildHTMLItem();
      //reminder to put in functions for control
      let items = Array.from(append.children);
      items[2].addEventListener("click", this.say);
      //append
      document.getElementById("todoMain").appendChild(append);
   }
}

function say() {
   console.log("1");
}
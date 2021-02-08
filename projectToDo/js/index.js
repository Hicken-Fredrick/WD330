import todoClass from './todoClass.js';
import { fillTodoList } from './todoView.js'

//add event listener for tasks
document.getElementById("taskAdd").addEventListener("click", addTask);

//grab previous data from local storage
let currentTodos = localStorage.getItem("Todos");
//output previous data if exists
if (currentTodos != null) {
   window.onload = fillTodoList(localStorage.getItem("Todos"));
}

//add task
function addTask() {
   //check if empty
   if (document.getElementById("taskContent").value.trim() != '') {
      //trim whitespace and send to class constructor
      let task = new todoClass(0, document.getElementById("taskContent").value.trim(), 0);
      let append = task.buildHTMLItem();
      //!!REMINDER!! to put in functions for control
      let items = Array.from(append.children);
      console.log(items);
      items[0].addEventListener("click", say);
      items[2].addEventListener("click", say);
      //append
      document.getElementById("todoMain").appendChild(append);
      //add to or create Todos from local storage
      addToTodos(task);
   }
}

function addToTodos(item) {
   if (currentTodos != null) {
      
   }
   else {
      
   }
}

function say() {
   console.log("1");
}
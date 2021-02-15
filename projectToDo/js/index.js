import todoClass from './todoClass.js';

//grab previous data from local storage
let currentTodos = localStorage.getItem("Todos");
let todosObj = JSON.parse(currentTodos);

//add event listener for tasks
document.getElementById("taskAdd").addEventListener("click", addTask);
document.getElementById("showAll").addEventListener("click", () => fillTodoList(todosObj));
document.getElementById("showComplete").addEventListener("click", () => displayComplete(todosObj));
document.getElementById("showIncomplete").addEventListener("click", () => displayIncomplete(todosObj));

//output previous data if exists
window.onload = ()=> {
   if (currentTodos != null) {
      fillTodoList(JSON.parse(localStorage.getItem("Todos")));
      displayRemainingTasks(JSON.parse(localStorage.getItem("Todos")));
   }
}

//add task
function addTask() {
   //check if empty
   if (document.getElementById("taskContent").value.trim() != '') {
      //trim whitespace and send to class constructor
      let task = new todoClass(0, document.getElementById("taskContent").value.trim(), 0);
      let append = task.buildHTMLItem();
      //!!REMINDER!! to put in functions for control
      addListeners(append);
      //append
      document.getElementById("todoMain").appendChild(append);
      //add to or create Todos from local storage
      addToTodos(task);
      //empty input
      document.getElementById("taskContent").value = '';
   }
}

function addToTodos(item) {
   if (currentTodos != null) {
      //add to obj
      todosObj.push(item);
      //update local
      localStorage.setItem("Todos", JSON.stringify(todosObj));
   }
   else {
      //set
      let toDoList = [item];
      //push to local
      let localCopy = JSON.stringify(toDoList);
      localStorage.setItem("Todos", localCopy);
      currentTodos = localStorage.getItem("Todos");
   }
}

function fillTodoList(todos) {
   if(todos == null) { return; }
   document.getElementById("todoMain").innerHTML = '';
   //get each item
   todos.forEach(item => {
      //make it into obj
      let todo = new todoClass(item.id, item.content, item.completed)
      //call obj HTML builder
      let append = todo.buildHTMLItem();
      //add listeners
      addListeners(append);
      //add to document
      document.getElementById("todoMain").appendChild(append);
   });
}

function displayComplete(todos) {
   if(todos == null) { return; }
   document.getElementById("todoMain").innerHTML = '';
   //get each item
   todos.forEach(item => {
      //make it into obj
      let todo = new todoClass(item.id, item.content, item.completed)
      //check if complete
      if (todo.completed == true) {
         //call obj HTML builder
         let append = todo.buildHTMLItem();
         //add listeners
         addListeners(append);
         //add to document
         document.getElementById("todoMain").appendChild(append);
      }
   });
}

function displayIncomplete(todos) {
   if(todos == null) { return; }
   document.getElementById("todoMain").innerHTML = '';
   //get each item
   todos.forEach(item => {
      //make it into obj
      let todo = new todoClass(item.id, item.content, item.completed)
      //check if incomplete
      if (todo.completed == false) {
         //call obj HTML builder
         let append = todo.buildHTMLItem();
         //add listeners
         addListeners(append);
         //add to document
         document.getElementById("todoMain").appendChild(append);
      }
   });
}

function displayRemainingTasks(todos) {
   let tasksRemaining = 0;
   todos.forEach(item => {
      if (item.completed == false) {
         //add to tasksRemaing
         tasksRemaining++;
      }
   });
   let append = document.createElement("p");
   append.innerText = `Tasks Remaining: ${tasksRemaining}`;
   //empty current data
   document.getElementById("data").innerHTML = '';
   //add new data
   document.getElementById("data").appendChild(append);
}

function check() {
   //build array
   Array.from(this.children)[0].className = "complete left";
   //add listener
   this.addEventListener("click", uncheck);
   //remove old listener
   this.removeEventListener("click", check);
   //update local
   todosObj.every(todo => {
      if(todo.id == this.lastElementChild.id) {
         todo.completed = true;
         localStorage.setItem("Todos", JSON.stringify(todosObj));
         return false;
      }
      return true;
   })
   displayRemainingTasks(todosObj);
}

function uncheck() {
   //build array
   Array.from(this.children)[0].className = "incomplete left";
   //add listener
   this.addEventListener("click", check);
   //remove old listener
   this.removeEventListener("click", uncheck);
   //update local
   todosObj.every(todo => {
      if(todo.id == this.lastElementChild.id) {
         todo.completed = false;
         localStorage.setItem("Todos", JSON.stringify(todosObj));
         return false;
      }
      return true;
   })
   displayRemainingTasks(todosObj);
}

function deleteTodo() {
   let i = 0;
   todosObj.forEach(todo => {
      if(todo.id == this.id) {
         todosObj.splice(i, 1);
         localStorage.setItem("Todos", JSON.stringify(todosObj));
      }
      i++
   })
   document.getElementById(`${this.id}`).parentElement.remove();
   displayRemainingTasks(todosObj);
}

function addListeners (todo) {
   let items = Array.from(todo.children);
   if(items[0].className.includes("incomplete")){todo.addEventListener("click", check);}
   else {todo.addEventListener("click", uncheck);}
   items[1].addEventListener("click", deleteTodo);
}
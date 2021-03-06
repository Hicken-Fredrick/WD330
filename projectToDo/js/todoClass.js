/* 
id = timestamp at creation
content = user input
complete ? 0 = incomplete 1 = completed
*/
export default class todoClass {
   constructor(id, content, completed) {
      //timestamp
      if (id == 0) {
         this.id = Date.now();
         this.completed = false;
      }
      else {
         this.id = id;
         this.completed = completed;
      }
      this.content = content;
   }

   buildHTMLItem() {
      const item = document.createElement("div");
      item.className = `task`
      item.innerHTML = `<span class="${this.completed ? "complete" : "incomplete"} left">${this.content}</span>
      <input class="right" value="Delete" type="button" id="${this.id}">`;
      return item;
   }
}
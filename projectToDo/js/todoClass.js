export default class todoClass {
   constructor(id, content, completed) {
      //timestamp
      if (id == 0) {
         this.id = Date.now(ms);
         this.completed = false;
      }
      else {
         this.id = id;
         this.completed = completed;
      }
      this.content = content;
   }

   
}
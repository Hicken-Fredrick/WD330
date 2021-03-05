import workModel from './model.js';

const model = new workModel();
  
//Run function to add items to OL with ID of notes
window.onload = () => {
   //fill notes section
   model.getNotes().forEach(note => {

   var newli = document.createElement("li");
   newli.innerHTML = `<a href="${note.url}">${note.label}</a>`;

   document.getElementById("notes").appendChild(newli);

   })
   //fill team activities seciont
   model.getTeamActivities().forEach(activity => {

      var newli = document.createElement("li");
      newli.innerHTML = `<a href="${activity.url}">${activity.label}</a>`;
      
      document.getElementById("teamActivities").appendChild(newli);
   
      })
   //fill projects section
   model.getProjects().forEach(project => {

      var newli = document.createElement("li");
      newli.innerHTML = `<a href="${project.url}">${project.label}</a>`;
   
      document.getElementById("projects").appendChild(newli);
   
      })
}
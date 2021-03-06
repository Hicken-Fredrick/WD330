const notes = [
   {
     label: "Week 01 Notes",
     url: "week1/"
   },
   {
     label: "Week 02 Notes",
     url: "week2/"
   },
   {
     label: "Week 03 Notes",
     url: "week3/"
   },
   {
     label: "Week 04 Notes",
     url: "week4/"
   },
   {
      label: "Week 10 Notes",
      url: "week10/"
   },
   {
      label: "Week 11 Notes",
      url: "week11/client/week11.html"
   }
 ]

 const teamActivities = [
   {
      label: "Team Activity 1",
      url: "teamActivity1/"
    },
    {
      label: "Team Activity 2",
      url: "teamActivity2/"
    },
    {
      label: "Team Activity 3",
      url: "teamActivity3/"
    },
    {
      label: "Team Activity 4",
      url: "teamActivity4/"
    },
    {
      label: "Team Activity 5",
      url: "teamActivity5/hiking-complete.html"
    },
    {
      label: "Team Activity 6",
      url: "teamActivity6/"
    },
    {
      label: "Team Activity 7",
      url: "teamActivity7/"
    }
 ]

 const projects = [
   {
      label: "To-Do Project",
      url: "projectToDo/"
   },
   {
      label: "PokiSurvive Project",
      url: "projectGame/"  
   }
 ]

 class workModel {
   getNotes() {
      return notes;
   }

   getTeamActivities() {
      return teamActivities;
   }

   getProjects() {
      return projects;
   }
 }

 export default workModel;
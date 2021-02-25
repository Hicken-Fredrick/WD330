const links = [
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
      label: "To-Do Project",
      url: "projectToDo/"
    }
  ]
  
  //Run function to add items to OL with ID of notes
  window.onload = links.forEach(link => {

    var newli = document.createElement("li");
    newli.innerHTML = `<a href="${link.url}">${link.label}</a>`;

    document.getElementById("notes").appendChild(newli);

  });
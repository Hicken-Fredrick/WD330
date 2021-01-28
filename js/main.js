const links = [
    {
      label: "Week 01 Notes",
      url: "week1/index.html"
    },
    {
      label: "Week 02 Notes",
      url: "week2/index.html"
    },
    {
      label: "Week 03 Notes",
      url: "week3/index.html"
    },
    {
      label: "Team Activity 1",
      url: "teamActivity1/index.html"
    },
    {
      label: "Team Activity 2",
      url: "teamActivity2/index.html"
    },
    {
      label: "Team Activity 3",
      url: "teamActivity3/index.html"
    }
  ]
  
  //Run function to add items to OL with ID of notes
  window.onload = links.forEach(link => {

    var newli = document.createElement("li");
    newli.innerHTML = `<a href="${link.url}">${link.label}</a>`;

    document.getElementById("notes").appendChild(newli);

  });
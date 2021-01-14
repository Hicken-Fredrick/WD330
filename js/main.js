const links = [
    {
      label: "Week 01 Notes",
      url: "week1/index.html"
    },
    {
      label: "Week 02 Notes",
      url: "week2/index.html"
    }
  ]
  
  //Run function to add items to OL with ID of notes
  window.onload = links.forEach(link => {

    var newli = document.createElement("li");
    newli.innerHTML = `<a href="${link.url}">${link.label}</a>`;

    document.getElementById("notes").appendChild(newli);

  });
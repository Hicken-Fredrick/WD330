import {hikeList} from './modules/greatHikes.js'


const imgBasePath = "//byui-cit.github.io/cit261/examples/";
  //on load grab the array and insert it into the page
  window.addEventListener("load", () => {
    showHikeList();
  });
  
function showHikeList() {
  const hikeListElement = document.getElementById("hikes");
  hikeListElement.innerHTML = "";
  renderHikeList(hikeList, hikeListElement);
}

function renderHikeList(hikes, parent) {
  hikes.forEach(hike => {
    parent.appendChild(renderOneHike(hike));
  });
}

function renderOneHike(hike) {
  const item = document.createElement("li");
  item.setAttribute('id', hike.name);
  item.onclick = moreData;

  item.innerHTML = ` <h2>${hike.name}</h2>
        <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
        <div class="right">
                <div>
                    <h3>Distance</h3>
                    <p>${hike.distance}</p>
                </div>
                <div>
                    <h3>Difficulty</h3>
                    <p>${hike.difficulty}</p>
                </div>
        </div>`;

  return item;
}

function moreData() {
  const hikeListElement = document.getElementById("hikes");
  hikeListElement.innerHTML = "";

  console.log(this.id)
  let hikeNum = findHike(this.id)

  let hike = hikeList[hikeNum];

  const item = document.createElement("li");
  item.setAttribute('id', hike.name);
  item.onclick = moreData;

  item.innerHTML = ` <h2>${hike.name}</h2>
        <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
        <div class="right">
                <div>
                    <h3>Distance</h3>
                    <p>${hike.distance}</p>
                </div>
                <div>
                    <h3>Difficulty</h3>
                    <p>${hike.difficulty}</p>
                </div>
        </div>`;
  
  hikeListElement.appendChild(item);
}

function findHike(hikeName) {
  let num = 0;
  for (num; num < hikeList.length; num++) {
    if(hikeList[num].name == hikeName) { return num;}
  }
  return 0;
}
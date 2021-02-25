const url = 'https://pokeapi.co/api/v2/pokemon/';
window.onload = makePage(url);

//build page using url code for pagination
async function makePage(url) {
   fetch(url)
   //make sure fetch went well
   .then((response) => {
      if(response.ok) {
         return response;
      }
      throw Error(response.statusText);
   })
   //consume promise into JSON
   .then( (response) => response.json())
   //build items through the data
   .then( (pokemons) => {
         document.getElementById("navTop").innerHTML = '';
         document.getElementById("navBot").innerHTML = '';
         document.getElementById("pokemonHolder").innerHTML = '';
         //if front no previous button
         if(pokemons.previous != null) {
            addNavButton(pokemons.previous, "previous");
         }
         //if end no next button
         if(pokemons.next != null) {
            addNavButton(pokemons.next, "next");
         }
         //step thorugh every pokemon in order
         for (pokemon of pokemons.results) {
            try{
               getPokemonData(pokemon);
            }catch(err){
               console.log(err);
            }
         }
   })
   .catch( error => console.log('There was an error!') )
}

function getPokemonData(pokemon) {
   try{
      //append item to hold place to ensure correct order
      let append = document.createElement("div");
      append.className = "pokemonCard";
      append.id = `${pokemon.name}`;
      append.innerHTML = `Retriving Data for ${[pokemon.name]}`;
      document.getElementById("pokemonHolder").appendChild(append);
      //get data for the pokemon
      fetch(pokemon.url)
      //check fetch went well
      .then((response) => {
         if(response.ok) {
            return response;
         }
            throw Error(response.statusText);
         })
      //consume promise into JSON
      .then((response) => response.json())
      //as data is recived change data within pre built object
      .then((pokemonData) => {
         document.getElementById(pokemonData.name).innerHTML = `
         <h2 class="pokemonName">${pokemonData.name}</h2>
         <div class="pokemonInfo">
         <img src="${pokemonData.sprites.front_default}">
         </div>`
      })
   }catch(err){
      console.log(err);
   }
}

//add top nav button
function addNavButton(url, name) {
   let button = document.createElement("button");
   button.addEventListener("click", () => makePage(url));
   button.addEventListener("click", () => topFunction());
   button.innerHTML = `${name}`;
   document.getElementById("navTop").appendChild(button);
   addBotNav(url, name);
}

//add bot bot nav buttons
function addBotNav(url, name) {
   let button = document.createElement("button");
   button.addEventListener("click", () => makePage(url));
   button.addEventListener("click", () => topFunction());
   button.innerHTML = `${name}`;
   document.getElementById("navBot").appendChild(button);
}

//nav buttons scroll to top of page
function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0; 
 } 
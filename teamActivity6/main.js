//https://pokeapi.co/api/v2/pokemon?limit=20&offset=0
const url = 'https://pokeapi.co/api/v2/pokemon/';
window.onload = makePage(url);

async function makePage(url) {
   fetch(url)
   .then((response) => {
      if(response.ok) {
         return response;
      }
      throw Error(response.statusText);
   })
   .then( (response) => response.json())
   .then( async (pokemons) => {
         document.getElementById("nav").innerHTML = '';
         document.getElementById("pokemonHolder").innerHTML = '';
         if(pokemons.previous != null) {
            addNavButton(pokemons.previous, "previous");
         }
         if(pokemons.next != null) {
            addNavButton(pokemons.next, "next");
         }
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
      let append = document.createElement("div");
      append.className = "pokemonCard";
      append.id = `${pokemon.name}`;
      append.innerHTML = `Retriving Data for ${[pokemon.name]}`;
      document.getElementById("pokemonHolder").appendChild(append);
      fetch(pokemon.url)
      .then((response) => {
         if(response.ok) {
            return response;
         }
            throw Error(response.statusText);
         })
      .then((response) => response.json())
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

function addNavButton(url, name) {
   let button = document.createElement("button");
   button.addEventListener("click", () => makePage(url));
   button.innerHTML = `${name}`;
   document.getElementById("nav").appendChild(button);
}
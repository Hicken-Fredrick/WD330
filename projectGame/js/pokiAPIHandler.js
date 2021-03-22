const baseURL = `https://pokeapi.co/api/v2/`

export default class pokiAPIHandler {

   async getPokiWithNum(pokiNum) {
      return fetch(`${baseURL}pokemon/${pokiNum}`)
      .then((response) => {
         if(response.ok) {
            return response;
         }
         throw Error(response.statusText);
      }).then((response) => response.json())
      .then((pokemon) => {return pokemon;})
      .catch(function(error) {
         console.log(error);
     });
   }

   async getItemWithNum(itemNum) {

   }

}
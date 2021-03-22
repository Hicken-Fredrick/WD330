const baseURL = `https://pokeapi.co/api/v2/`

export default class pokiAPIHandler {

   async getPokiWithNum(pokiNum) {
      return fetch(`${baseURL}/pokemon/${pokiNum}`)
      .then(function(response) {
         if (!response.ok) {
            throw Error(response.statusText);
        } else {
            return response.json();
        }
      }).catch(function(error) {
         console.log(error);
     });
   }

   async getItemWithNum(itemNum) {

   }

}
const items = [
   {
      name: "Full Restore",
      description: "Restores HP to full",
      code: "heal",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/full-restore.png"
   },
   {
      name: "HP-Up",
      description: "Increase Max HP by 250",
      code: "hpmax",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/hp-up.png"
   },
   {
      name: "Protein",
      description: "Increases attack by 75",
      code: "atk",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/protein.png"
   },
   {
      name: "Calcium",
      description: "Increases Special Attack by 75",
      code: "spatk",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/calcium.png"
   },
   {
      name: "Iron",
      description: "Increases Defense by 75",
      code: "def",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/iron.png"
   },
   {
      name: "Zinc",
      description: "Increases Special Defence by 75",
      code: "spdef",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/zinc.png"
   },
   {
      name: "Carbos",
      description: "Increases Speed by 75",
      code: "spd",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/carbos.png"
   }
];

export default class item {
   constructor(num) {
      this.info = items[num];
   }
}
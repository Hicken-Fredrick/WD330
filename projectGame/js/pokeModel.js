export default class pokeModel {
   constructor(data) {
      this.img = `${data.sprites.front_default}`;
      this.name = `${data.name}`;
      this.statHP = `${data.stats[0].base_stat}`;
      this.statATK = `${data.stats[1].base_stat}`;
      this.statDEF = `${data.stats[2].base_stat}`;
      this.statSPATK = `${data.stats[3].base_stat}`;
      this.statSPDEF = `${data.stats[4].base_stat}`;
      this.statSPD = `${data.stats[5].base_stat}`;
   }
}
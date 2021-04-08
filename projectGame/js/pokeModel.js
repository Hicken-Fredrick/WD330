export default class pokeModel {
   constructor(data) {
      this.img = `${data.sprites.front_default}`;
      this.name = `${data.name}`;
      this.statHP = `${Number(data.stats[0].base_stat) * 10}`;
      this.curHP = this.statHP;
      this.statATK = `${Number(data.stats[1].base_stat) * 10}`;
      this.statDEF = `${Number(data.stats[2].base_stat)}`;
      this.statSPATK = `${Number(data.stats[3].base_stat) * 10}`;
      this.statSPDEF = `${Number(data.stats[4].base_stat)}`;
      this.statSPD = `${Number(data.stats[5].base_stat)}`;
   }

   addStat(stat) {
      const statBonus = 75;
      const hpBonus = 250;
      switch(stat){
         case "heal": {
            this.curHP = this.statHP;
            break;
         }
         case "hpmax": {
            this.statHP += hpBonus;
            this.curHP += hpBonus;
            break;
         }
         case "atk": {
            this.statATK += statBonus;
            break;
         }
         case "spatk": {
            this.statSPATK += statBonus;
            break;
         }
         case "def": {
            this.statDEF += statBonus;
            break;
         }
         case "spdef": {
            this.statSPDEF += statBonus;
            break;
         }
         case "spd": {
            this.statSPD += statBonus;
            break;
         }
         
      }
   }

   enemyModifier(difficultyMod) {
      this.statHP = `${Math.floor(Number(this.statHP) * (.7 + (difficultyMod/10)))}`;
      this.curHP = this.statHP;
      this.statATK = `${Number(this.statATK) * (.7 + (difficultyMod/10))}`;
      this.statDEF = `${Number(this.statDEF) * (.7 + (difficultyMod/10))}`;
      this.statSPATK = `${Number(this.statSPATK) * (.7 + (difficultyMod/10))}`;
      this.statSPDEF = `${Number(this.statSPDEF) * (.7 + (difficultyMod/10))}`;
      this.statSPD = `${Number(this.statSPD) * (.7 + (difficultyMod/10))}`;
   }

   takeHit(dmg, type) {
      //take hit
      switch(type) {
         //standard attack
         case "atk": {
            this.curHP = Math.floor(this.curHP - ((dmg / this.statDEF)+1));
            //return alive status
            if(this.curHP <= 0) {return false}
            else{return true}
            break;
         }
         //special attack
         case "spatk": {
            this.curHP = Math.floor(this.curHP - ((dmg / this.statSPDEF)+1));
            //return alive status
            if(this.curHP <= 0) {return false}
            else{return true}
            break;
         }
      }
   }
}
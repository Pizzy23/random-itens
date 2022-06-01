import { NumeroRandomico } from "../util/random";
const random = new NumeroRandomico();

export class Status {
  random: NumeroRandomico;
  status: {};
  critic: number;
  lifesteal: number;
  atkSpd: number;
  furry: number;
  armorPenetration: number;
  resist: number;
  defense: number;
  life: number;
  immunity: number;
  cooldown: number;
  weight: number;
  i:number;
  num: number;
  statusMax: any;
  
  constructor(rarity: number) {
    this.random = random;
    this.statusMax = rarity;
  }

  async statusCreate() {
      if (this.i == undefined || this.i > this.statusMax) {
        this.i = 0;
      }
      if (this.i !== this.statusMax) {
        await this.__setNum()
        if (this.num == 1) this.critic = await random.critic();
        if (this.num == 2) this.lifesteal = await random.lifesteal();
        if (this.num == 3) this.atkSpd = await random.atkSpd();
        if (this.num == 4) this.furry = await random.furry();
        if (this.num == 5) this.armorPenetration = await random.armorPenetration();
        if (this.num == 6) this.resist = await random.resist();
        if (this.num == 7) this.defense = await random.defense();
        if (this.num == 8) this.life = await random.life();
        if (this.num == 9) this.immunity = await random.immunity();
        if (this.num == 10) this.cooldown = await random.cooldown();
        this.i++;
        return await this.statusCreate();
      } else if (this.i == this.statusMax) {
        return await this.statusOrganization();
      }
  }
  async __setNum() {
    this.num = await random.statusSelect();
  }
  async statusOrganization() {
    if (this.weight == undefined) this.weight = await random.weight();
    this.status = {
      critic: this.critic,
      lifesteal: this.lifesteal,
      atkSpd: this.atkSpd,
      furry: this.furry,
      armorPenetration: this.armorPenetration,
      resist: this.resist,
      defense: this.defense,
      life: this.life,
      immunity: this.immunity,
      cooldown: this.cooldown,
      weight: this.weight,
    };

    let refinity = Object.keys(this.status).forEach((key) => {
      if (this.status[key] == undefined) {
        delete this.status[key];
      }
    });
    return this.status;
  }
  async __status(){
   return await this.statusCreate()
  }
}
import { NumeroRandomico } from "../util/random";
const random = new NumeroRandomico();

export class Damage {
  type: any;
  dmgTypes: string;
  damage: number;
  num: number;
  dmgMultiplier: any;
  multiDmg: number;

  constructor(rarity) {
    this.dmgMultiplier = rarity;
  }

  async dmgType() {
    await this.__setDmgType();
    if (this.type === 1) return "Magick";
    if (this.type === 2) return "Physical";
  }

  async damageCreate() {
    await this.__setDamage();
    await this.__setType();
    if (this.dmgTypes === "Magick") this.type = await this.damageMagickCreate();
    if (this.dmgTypes === "Physical")
      this.type = await this.damagePhysicalCreate();
    await this.__setMulti();
    return this.multiDmg + "/" + this.type;
  }
  async damageMagickCreate() {
    await this.__setNum();
    if (this.num === 1) return "Fire";
    if (this.num === 2) return "Thunder";
    if (this.num === 3) return "Cold";
    if (this.num === 4) return "Corrosive";
    if (this.num === 5) return "Poison";
  }
  async damagePhysicalCreate() {
    await this.__setNum();
    if (this.num === 1) return "Slash";
    if (this.num === 2) return "Impact";
    if (this.num === 3) return "Piercing";
    if (this.num === 4 || this.num === 5) return "True";
  }
  async __setDmgType() {
    this.type = await random.dmgTy();
  }
  async __setType() {
    this.dmgTypes = await this.dmgType();
  }
  async __setDamage() {
    this.damage = await random.damage();
  }
  async __setNum() {
    this.num = await random.dmgTypes();
  }
  async __setMulti() {
    if (this.dmgMultiplier == 0) this.multiDmg = this.damage * 0.2;
    if (this.dmgMultiplier == 1) this.multiDmg = this.damage * 0.5;
    if (this.dmgMultiplier == 2) this.multiDmg = this.damage * 1 - 500;
    if (this.dmgMultiplier == 3) this.multiDmg = this.damage * 1.5 - 400;
    if (this.dmgMultiplier == 4) this.multiDmg = this.damage * 2 - 200;
    if (this.dmgMultiplier == 5) this.multiDmg = this.damage * 5 + 100;
  }
}

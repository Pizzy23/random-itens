import { NumeroRandomico } from "../util/random";
export class CreateEffect {
  effect: String;
  num: any;
  random = new NumeroRandomico();
  description: string;
  chance: any;
  dmg: any;
  effectObj: any = {};

  async objectEffects() {
    return (this.effectObj = {
      Effect: this.effect,
      Description: this.description, 
    });
  }
  async createEffect(dmg: any) {
    this.__setDmg(dmg);
    await this.__setNum();
    await this.__setChance();
    await this.mockEffects();
    return this.objectEffects();
  }
  async mockEffects() {
    if(this.num === 0 ){
      this.effect = "Chain lightning";
      this.description = `Hits have ${this.chance}% to apply lightning that passes from enemy to enemy dealing ${Math.floor(this.dmg / 4)} as lightning damage, electrocuting and causing stun`
    }
    if (this.num === 1) {
      this.effect = "Explosion";
      this.description = `Every attack has a ${this.chance}% to explode dealing the weapon's elemental damage to all enemies.`;
    }
    if (this.num === 2) {
      this.effect = "Three hits";
      this.description = `Every three hits, deals ${this.dmg} as damage to all forwards in a cone shape.`;
    }
    if (this.num === 3) {
      this.effect = "Cutting turn";
      this.description = `Each attack has ${this.chance}% to attack everyone around it dealing ${this.dmg} as damage.`;
    }
    if (this.num === 4) {
      this.effect = "Guillotine";
      this.description = `Some hits have ${this.chance}% to apply bleed ${Math.floor(this.dmg / 3)} for 5 seconds.`;
    }
    if (this.num === 5) {
      this.effect = "Collector";
      this.description = `Enemies below 5% health are executed, and exploding causing ${Math.floor(this.dmg / 2)}.`;
    }
  }
  private async __setNum() {
    this.num = await this.random.effect();
  }
  private async __setChance() {
    this.chance = await this.random.chance();
  }
  private async __setDmg(dmg: any) {
    this.dmg = Math.floor(dmg / 5);
  }
}

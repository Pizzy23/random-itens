import { NumeroRandomico } from "../util/random";

export class TypeItem {
  random = new NumeroRandomico();
  num: number;
  typeName: string;

  async typeCreate() {
    await this.__setNum();
    await this.defineType();
    return this.typeName;
  }

  private async defineType() {
    if (this.num === 0) {
      this.typeName = "Dagger / One Hand";
    }
    if (this.num === 1) {
      this.typeName = "Sword / One Hand";
    }
    if (this.num === 2) {
      this.typeName = "Sword / Two Hand";
    }
    if (this.num === 3) {
      this.typeName = "GreatSword / Two Hand";
    }
    if (this.num === 4) {
      this.typeName = "Hammer / Two Hand";
    }
    if (this.num === 5) {
      this.typeName = "MegaSword / Two Hand";
    }
    if (this.num === 6) {
      this.typeName == "Stick?? / One Hand?";
    }
  }

  private async __setNum() {
    this.num = await this.random.type();
  }
}

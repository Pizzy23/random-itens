import {
  Status,
  salveItem,
  Damage,
  durability,
  effect,
  typeCreate,
  requirement,
  rarityName,
  rarityStatusMax,
} from ".";
import { rareCreate } from "./random/rarity";

export class CreateItem {
  item: any;
  constructor(item: any) {
    this.item = item;
  }

  async salveItem() {
    if (this.item) {
     return console.log(this.item);
      // await salveItem(item);
    }
  }

  async create() {
    const rare = await rareCreate();
    const rarity = await rarityStatusMax(rare);
    const rareName = await rarityName(rare);

    const damage = new Damage(rare);
    const status = new Status(rarity);

    const statusFinal = await status.__status()
    const dmg = await damage.damageCreate()

    const dura = await durability()
    const type = await typeCreate()
    const requi = await requirement()
    let effec = await effect();
    await this._setItem(type,rareName,dura,dmg,statusFinal,effec,requi)
    return await this.salveItem()
  }
  async _setItem(type, rarity,dura,damage,status,effect,requirement){
    return this.item = {
      Type: type,
      Rarity: rarity,
      Durability: dura,
      Damage: damage,
      Status: status,
      Effect: effect,
      Reque: requirement,
    };
  }
}
const numItem = 1;
let item = null;
const createItem = new CreateItem(item);
for (let i = 0; i < numItem; i++) {
  createItem.create();
  if (numItem === i) break;
}

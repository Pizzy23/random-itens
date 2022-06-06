import {
  Status,
  salveItem,
  Damage,
  Durability,
  effect,
  typeCreate,
  requirement,
  Rare
} from ".";


export class CreateItem {
  item: any;
  status: any;
  rareName: any;
  dmg: any;
  durabi: any;
  type: any;
  dura: any;
  effect: any;
  requirement: any;
  constructor(item: any) {
    this.item = item;

  }

  async salveItem() {
    if (this.item) {
      return console.log(this.item);
      // await salveItem(item);
    }
  }

  async callAllParams(){
    const rarityObj = new Rare();
    const rare = await rarityObj.rareCreate();
    const rarityStatus = await rarityObj.rarityStatusMax(rare);
    this.rareName = await rarityObj.rarityName(rare);

    const damage = new Damage(rare);
    const status = new Status(rarityStatus);
    const durability = new Durability()

     this.status = await status.__status();
     this.dmg = await damage.damageCreate();
     this.durabi = durability.durabilityCreate(rare);

    const type = await typeCreate();
    const requi = await requirement();
    let effec = await effect();
  }

  async create() {
    await this.callAllParams();
    await this._setItem();
    return await this.salveItem();
  }
  async _setItem() {
    return (this.item = {
      Type: this.type,
      Rarity: this.rareName,
      Durability: this.dura,
      Damage: this.dmg,
      Status: this.status,
      Effect: this.effect,
      Reque: this.requirement,
    });
  }
}
const numItem = 1;
let item = null;
const createItem = new CreateItem(item);
for (let i = 0; i < numItem; i++) {
  createItem.create();
  if (numItem === i) break;
}

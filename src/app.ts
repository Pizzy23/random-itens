import { type } from "os";
import {
  Status,
  salveItem,
  damageCreate,
  durability,
  effect,
  typeCreate,
  requirement,
  rarityName,
  rarityStatusMax,
} from ".";
import {rareCreate } from "./random/rarity";

const criarItem = async () => {
  let status: {
    critic?: number;
    lifesteal?: number;
    atkSpd?: number;
    furry?: number;
    armorPenetration?: number;
    resist?: number;
    defense?: number;
    life?: number;
    immunity?: number;
    weight?: number;
  };
  let i = 0;
  const rare = await rareCreate()
  const rarity = await rarityStatusMax(rare)
  const rareName = await rarityName(rare)
  let statusFinal = await Status(status, i, rarity);
  let effec;
  let item = {
    Type: await typeCreate(),
    Rarity: rareName,
    Durability: await durability(),
    Damage: await damageCreate(),
    Status: statusFinal,
    Effect: await effect(effec),
    Reque: await requirement(),
  };
  if (item) {
    console.log(item);
    // await salveItem(item);
  }
};

const numItem = 1;
for (let i = 0; i < numItem; i++) {
  criarItem();
  if (numItem === i) break;
}
function i(
  status: {
    critic?: number;
    lifesteal?: number;
    atkSpd?: number;
    furry?: number;
    armorPenetration?: number;
    resist?: number;
    defense?: number;
    life?: number;
    immunity?: number;
    weight?: number;
  },
  i: any
) {
  throw new Error("Function not implemented.");
}

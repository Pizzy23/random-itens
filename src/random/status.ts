import { NumeroRandomico } from "../util/random";
const random = new NumeroRandomico();

let critic: number,
  lifesteal: number,
  atkSpd: number,
  furry: number,
  armorPenetration: number,
  resist: number,
  defense: number,
  life: number,
  immunity: number,
  cooldown: number,
  weight: number;
let i = 0;
let num = 0;
const callAllStatus = async (status, i, statusMax) => {
  try {
    const statusF = await statusCreate(num, i, statusMax);
    return statusF;
  } catch (error) {
    console.log(error);
  }
};

const statusCreate = async (num, i, statusMax) => {
  try {
    if (i == undefined || i > statusMax) {
      i = 0;
    }
    if (i !== statusMax) {
      let num = await random.statusSelect();
      if (num == 1) critic = await random.critic();
      if (num == 2) lifesteal = await random.lifesteal();
      if (num == 3) atkSpd = await random.atkSpd();
      if (num == 4) furry = await random.furry();
      if (num == 5) armorPenetration = await random.armorPenetration();
      if (num == 6) resist = await random.resist();
      if (num == 7) defense = await random.defense();
      if (num == 8) life = await random.life();
      if (num == 9) immunity = await random.immunity();
      if (num == 10) cooldown = await random.cooldown();
      i++;
      return statusCreate(num, i, statusMax);
    } else if (i == statusMax) {
      return statusOrganization(num);
    }
  } catch (err) {
    console.log(err);
  }
};

const statusOrganization = async (status) => {
  if (weight == undefined) weight = await random.weight();
  status = {
    critic: critic,
    lifesteal: lifesteal,
    atkSpd: atkSpd,
    furry: furry,
    armorPenetration: armorPenetration,
    resist: resist,
    defense: defense,
    life: life,
    immunity: immunity,
    cooldown: cooldown,
    weight: weight,
  };

  let statusF = Object.keys(status).forEach((key) => {
    if (status[key] == undefined) {
      delete status[key];
    }
  });
  return status;
};

export const Status = async (status, i, rarity) => {
  const statusMax = rarity;
  i = 0;
  const statusF = await callAllStatus(status, i, statusMax);
  return statusF;
};

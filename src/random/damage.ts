import { NumeroRandomico } from "../util/random";
const random = new NumeroRandomico();

const dmgCreateType = async () => {
  const type = await random.dmgTy();
  if (type === 1) return "Magick";
  if (type === 2) return "Physical";
};

export const damageCreate = async () => {
  const dmgType = await dmgCreateType();
  const damage = await random.damage();
  let type;
  if (dmgType === "Magick") type = await damageMagickCreate();
  if (dmgType === "Physical") type = await damagePhysicalCreate();
  return damage + "/" + type;
};
const damageMagickCreate = async () => {
  const num = await random.dmgTypes();
  if (num === 1) return "Fire";
  if (num === 2) return "Thunder";
  if (num === 3) return "Cold";
  if (num === 4) return "Corrosive";
  if (num === 5) return "Poison";
};
const damagePhysicalCreate = async () => {
  const num = await random.dmgTypes();
  if (num === 1) return "Slash";
  if (num === 2) return "Impact";
  if (num === 3) return "Piercing";
  if (num === 4 || num === 5) return "True"
};

import { NumeroRandomico } from "../util/random";
const random = new NumeroRandomico();

export const rareCreate = async () => {
  return await random.rarity();
};

export const rarityStatusMax = async (num) => {
  if (num == 0) return 5;
  if (num == 1) return 5;
  if (num == 2) return 8;
  if (num == 3) return 8;
  if (num == 4) return 10;
  if (num == 5) return 15;
};

export const rarityName = async (num: number) => {
  if (num == 0) return "Basic";
  if (num == 1) return "Commun";
  if (num == 2) return "Uncommun";
  if (num == 3) return "Rare";
  if (num == 4) return "Very Rare";
  if (num == 5) return "Legendary";
};

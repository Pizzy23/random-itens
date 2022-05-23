import { AppDataSource } from "../mysql";
import {Item, Desc} from '../'
import { EntityTarget } from "typeorm";

const searchDescription = async (effect: EntityTarget<unknown>) => {
const itemRepo = AppDataSource.getRepository(Desc)
  AppDataSource.initialize()
    .then(async () => {
      let description = await itemRepo.manager.find(effect);
      return description;
    })
    .catch((err) => console.log(err));
};

export const salveItem = async (newItem: EntityTarget<unknown>) => {
    const salveRepo = AppDataSource.getRepository(Item)
  AppDataSource.initialize()
    .then(async () => {

    })
    .catch((err) => console.log(err));
};

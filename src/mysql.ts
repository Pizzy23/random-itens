import "reflect-metadata";
import { DataSource } from "typeorm";
import { Item } from "./entity/item.entity";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.MYSQL_HOST,
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  synchronize: true,
  logging: false,
  entities: [Item],
  migrations: [],
  subscribers: [],
});

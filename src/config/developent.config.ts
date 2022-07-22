import { DataSource } from "typeorm";
import 'dotenv/config'
export const AppDataSource:DataSource= new DataSource({
    type:'mysql',
    host:process.env.HOST,
    port:Number(process.env.DB_PORT),
    username:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DATABASE,
    entities:['src/entity/*entity.ts'],
    synchronize: true,
    logging: true,
})
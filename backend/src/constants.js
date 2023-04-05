import * as dotenv from "dotenv";
dotenv.config();

// Connect Infos
const IP_SERVER = process.env.IP_SERVER;
const PORT_SERVER = process.env.PORT || 3333;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

export const constants = {
    IP_SERVER,
    PORT_SERVER,
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
};

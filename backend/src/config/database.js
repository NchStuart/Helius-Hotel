import mysql from "mysql2";
import {constants} from "../constants.js";

const connection = mysql.createConnection({
    host: constants.IP_SERVER,
    user: constants.DB_USER,
    password: constants.DB_PASSWORD,
    database: constants.DB_NAME,
});

export default connection;

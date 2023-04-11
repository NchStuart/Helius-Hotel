import * as dotenv from "dotenv";
import { app } from "./app";
import { constants } from "./constants";
import connection from "./config/database";

dotenv.config();

connection.connect(function (err) {
    if (err) throw err;

    app.listen(constants.PORT_SERVER, () => {
        console.log("SERVIDOR HELIUS HOTEL LIGADO!");
        console.log(
            `SERVIDOR ESTÁ RODANDO EM http://${constants.IP_SERVER}:${constants.PORT_SERVER}`
        );
        console.log(
            `Banco de dados ${constants.DB_NAME} está conectado com sucesso.`
        );
    });
});

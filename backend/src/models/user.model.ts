import connection from "../config/database";
import { User } from "../util/types";

export function insertUser(user: User, res: Function) {
    connection.execute(
        `INSERT INTO usuarios (id_usuario, nome_usuario, nome_completo, email, senha, nivel, telefone, id_reserva, status)
        VALUES (null, "${user.username}", "${user.fullName}", "${user.email}", "${user.password}", "${user.level}",
            "${user.phoneNumber}", "0", "0")`,
        function(error) {
            res(error);
        }
    );
}

export function getUser(email: String, res: Function) {
    return connection.execute(`SELECT * FROM usuarios WHERE email = "${email}"`,
        function(error: Error, result: String[]) {
            res(error, result[0]);
        }
    );
}

export const getUserforId = (id, result) => {
    if (id && +id) {
        connection.execute(
            "SELECT * FROM `usuarios` WHERE `id_usuario` = ?",
            [id],
            async function (err, results) {
                if (err) {
                    result(
                        err,
                        "Algo deu errado ao acessar a lista de usuarios."
                    );
                    return;
                }
                await result(null, results);
            }
        );
    } else {
        result(1, "ID invalido.");
    }
};

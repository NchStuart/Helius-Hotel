import connection from "../config/database";
import { User } from "../util/types";

export function createUser(user: User, res: Function) {
    connection.execute(
        `INSERT INTO usuarios (id_usuario, nome_usuario, nome_completo, email, senha, nivel, telefone, id_reserva, status)
        VALUES (null, "${user.username}", "${user.fullName}", "${user.email}", "${user.password}", "${user.level}",
            "${user.phoneNumber}", "${user.reservationId}", "${user.status}")`,
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

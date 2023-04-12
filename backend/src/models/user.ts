import connection from "../config/database";
import { User } from "../util/types";

export async function createUser(user: User, res: Function) {
    connection.execute(
        `INSERT INTO usuarios (id_usuario, nome_usuario, nome_completo, email, senha, nivel, telefone, id_reserva, status)
        VALUES (null, "${user.username}", "${user.fullName}", "${user.email}", "${user.password}", "${user.level}",
            "${user.phoneNumber}", "${user.reservationId}", "${user.status}")`,
        function(error) {
            res(error)
        }
    );
}

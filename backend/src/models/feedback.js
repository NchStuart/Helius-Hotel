import connection from "../config/database.js";

export const completeFeedBackData = (acomod, result) => {
    if (+acomod) {
        connection.query(
            "SELECT * FROM `avaliacoes` WHERE `acomodacao_id_acomodacao` = ?",
            [acomod],
            (err, results) => {
                if (err) {
                    result(
                        err,
                        "Algo deu errado ao consultar esta tabela no banco de dados."
                    );
                    return;
                }
                if (!results[0]) {
                    result(1, "ID da acomodação invalida");
                    return;
                }
                result(err, results);
            }
        );
    } else {
        result(1, "Dados invalidos");
    }
};

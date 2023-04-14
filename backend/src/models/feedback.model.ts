import connection from "../config/database";

export const completeFeedBackData = (acomod, result) => {
    if (+acomod) {
        connection.execute(
            "SELECT * FROM `avaliacao` WHERE `acomodacao_id_acomodacao` = ?",
            [acomod],
            function (err, results) {
                if (err) {
                    result(
                        err,
                        "Algo deu errado ao consultar esta tabela no banco de dados."
                    );
                    return;
                }
                if (!results[0]) {
                    result(1, "ID da acomodação invalida ou não existem avaliações para está acomodação");
                    return;
                }
                result(err, results);
            }
        );
    } else {
        result(1, "Dados invalidos");
    }
};

export const createFullFeedBack = (
    acomod,
    user,
    comment,
    stars,
    title,
    date,
    result
) => {
    if (+acomod && user && comment && stars) {
        connection.execute(
            "INSERT INTO `avaliacao` VALUES (null,?,?,?,?,?,?,1)",
            [user, acomod, title, comment, date, stars],
            function (err, results) {
                if (err) {
                    result(
                        err,
                        "Algo deu errado ao inserir dados nesta tabela do banco de dados."
                    );
                    return;
                }
                result(err, results);
            }
        );
    } else {
        result(1, "Dados inseridos de forma incorreta do permitido.");
    }
};

export const searchUserforId = (id, result) => {
    if (id && +id) {
        connection.execute(
            "SELECT * FROM `usuarios` WHERE `id_usuario` = ?",
            [id],
            function (err, results) {
                if (err) {
                    result(
                        err,
                        "Algo deu errado ao acessar a lista de usuarios."
                    );
                    return;
                }
                result(err, results);
            }
        );
    } else {
        result(1, "ID invalido.");
    }
};

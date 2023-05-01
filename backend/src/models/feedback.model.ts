import connection from "../config/database";

export const findByAccommodation = (acomod, result) => {
    if (+acomod) {
        connection.execute(
            "SELECT * FROM `avaliacao` WHERE `acomodacao_id_acomodacao` = ?",
            [acomod],
            function (err, results) {
                if (err) {
                    result(err, "ID da acomodação invalida.");
                    return;
                }
                results.length > 0 ? result(err, results) : result(1, "Não existem avaliações para está acomodação");
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

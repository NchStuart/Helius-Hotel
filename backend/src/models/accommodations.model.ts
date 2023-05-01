import connection from "../config/database";

export function findAll(result) {
    connection.execute("SELECT * FROM acomodacao",(err,results) => {
        result(err,results);
    });

}

export function findbyId(id,result) {
    if (+id) {
        connection.execute(
            "SELECT * FROM `acomodacao` WHERE `id_acomodacao` = ?",
            [id],
             function (err, results) {
                result(err,results);
            }
        );
    } else {
        result("ID invalido.", undefined);
    }
};




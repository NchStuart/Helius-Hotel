import {
    completeFeedBackData,
    createFullFeedBack,
    getUserforId,
} from "../models/index.model";
import { convertDataForDefault, convertDataForDB } from "../util/functions";
import axios from "axios";

async function getFeedBackList(req, res) {
    const acomodID = req.params.acomodID;
    const getUserforIdAsync = (id) =>
        new Promise((resolve, reject) =>
            getUserforId(id, (err, resultUserData) =>
                err ? reject(err) : resolve(resultUserData)
            )
        );
    const user = async (id) =>
        await getUserforIdAsync(id).catch((err) => {
            console.log(err);
            res.status(400).send("Erro ao encontrar o usuario");
        });
    if (acomodID && +acomodID) {
        completeFeedBackData(acomodID, async (err, resultFdData) => {
            if (err) {
                console.log(err);
                res.status(400).send({
                    error: resultFdData,
                });
            } else {
                console.log(resultFdData)
                const feedBackData = await Promise.all(
                    resultFdData.map(async (feedback) => {
                        return {
                            userID: feedback.usuarios_id_usuario,
                            userFullName: (
                                await user(feedback.usuarios_id_usuario)
                            )[0].nome_completo,
                            titleComment: feedback.titulo,
                            textComment: feedback.comentario,
                            dateComment: convertDataForDefault(feedback.data),
                            stars: feedback.estrelas,
                            status: feedback.status,
                        };
                    })
                );

                res.status(200).send(feedBackData);
            }
        });
    } else {
        res.status(400).send({
            fatal: "URL invalido.",
        });
    }
}

function updateFeedBackList(req, res) {}

function createFeedBack(req, res) {
    const {
        acomodID,
        userID,
        titleComment,
        textComment,
        dataComment,
        userStars,
    } = req.body;
    if (
        acomodID &&
        +acomodID &&
        userID &&
        +userID &&
        titleComment &&
        textComment &&
        dataComment &&
        userStars &&
        +userStars &&
        userStars <= 5 &&
        +userStars
    ) {
        createFullFeedBack(
            acomodID,
            userID,
            textComment,
            userStars,
            titleComment,
            convertDataForDB(dataComment),
            (err, result) => {
                if (err) {
                    res.status(400).send({
                        error: err,
                    });
                    console.log(err);
                } else {
                    res.status(200).send({
                        msg: "Avaliação criada com sucesso.",
                    });
                }
            }
        );
    } else {
        res.status(400).send({
            error: "Dados de avaliação invalidos",
        });
    }
}

export const feedBackController = {
    getFeedBackList,
    createFeedBack,
};

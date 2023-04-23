import { completeFeedBackData, createFullFeedBack, searchUserforId } from "../models/index.model";
import {convertDataForDefault} from "../util/functions";

function getFeedBackList(req, res) {
    const acomodID = req.params.acomodID;
    if (acomodID && +acomodID) {
        completeFeedBackData(acomodID, (err, resultFdData) => {
            if (err) {
                res.status(400).send({
                    error: resultFdData,
                });
                console.log(err);
            } else {
                let feedBackData = [];
                resultFdData.forEach(v => {
                    searchUserforId(v.usuarios_id_usuario, (err, resultUserData) => {
                        if (err) {
                            res.status(400).send({
                                error: resultUserData,
                            });
                            console.log(err);
                        } else {
                            feedBackData.push({
                                feedBackID: v.id_avaliacao,
                                userFullName: resultUserData[0].nome_completo,
                                acomodID: v.acomodacao_id_acomodacao,
                                titleComment: v.titulo,
                                textComment: v.comentario,
                                dateComment: convertDataForDefault(v.data),
                                stars: v.estrelas,
                                status: v.status
                            });
                        }
                    });
                })

                setTimeout(() => {
                    res.status(200).send(feedBackData);
                }, 500);
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
    const { acomodID, userID,titleComment, textComment,dataComment, userStars } = req.body;
    if(acomodID && +acomodID && userID && +userID && titleComment && textComment && dataComment && userStars && +userStars && userStars <= 5 && +userStars) {
        createFullFeedBack(acomodID,userID,textComment,userStars,titleComment,dataComment,  (err, result) => {
            if (err) {
                res.status(400).send({
                    error: "Avaliação não foi criada, algo deu errado.",
                });
                console.log(err);
            } else {
                res.status(200).send({msg:"Avaliação criada com sucesso."});
            }
        });
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

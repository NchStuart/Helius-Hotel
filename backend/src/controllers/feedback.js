import { completeFeedBackData, createFullFeedBack } from "../models/index.js";

function getFeedBackList(req, res) {
    const acomodID = req.params.acomodID;
    if (acomodID && +acomodID) {
        completeFeedBackData(acomodID, (err, result) => {
            if (err) {
                res.status(400).send({
                    error: result,
                });
                console.log(err);
            } else {
                res.status(200).send(result);
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
    const { acomodID, userID, userComment, userStars } = req.body;
    if(acomodID && +acomodID && userID && +userID && userComment && userStars && +userStars) {
        createFullFeedBack(acomodID,userID,userComment,userStars, (err, result) => {
            if (err) {
                res.status(400).send({
                    error: "Avaliação não foi criada, algo deu errado.",
                });
                console.log(err);
            } else {
                res.status(200).send({msg:"Avaliação criada com sucesso."});
            }
        });
    };
}

export const feedBackController = {
    getFeedBackList,
    createFeedBack,
};

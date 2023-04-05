import { completeFeedBackData } from "../models/index.js";

function getFeedBackList(req, res) {
    const acomodID = req.params.acomodID;
    if (acomodID && +acomodID) {
        completeFeedBackData(acomodID, (err, result) => {
            if (err) {
                res.status(400).send({
                    error: result,
                });
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

function createFeedBack(req, res) {}

export const feedBackController = {
    getFeedBackList,
};

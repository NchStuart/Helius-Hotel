import { findAll,findbyId } from "../models/index.model";

async function getAllAccommodations(req,res) {
    findAll((err,result) => {
        if (err) {
            console.log(err);
            res.status(400).json(err);
        }
        res.status(200).json(result);
    });
}

async function getAccommodationsForId(req,res) {
    const id = req.params.id;
    findbyId(id, (err,result) => {
        if (err) {
            console.log(err);
            res.status(400).json(err);
        }
        res.status(200).json(result);
    });
}


export const accommodationsController = {
    getAllAccommodations,
    getAccommodationsForId
};

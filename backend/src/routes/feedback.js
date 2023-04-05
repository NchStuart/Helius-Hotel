import express from "express";
import { feedBackController } from "../controllers/index.js";

const api = express.Router();

api.get('/feedback/accommodations/:acomodID', feedBackController.getFeedBackList);

api.post('/feedback/register', feedBackController.createFeedBack);

export const userRoutes = api;

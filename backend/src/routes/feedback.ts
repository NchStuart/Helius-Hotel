import express from "express";
import { feedBackController } from "../controllers/index";

const api = express.Router();

api.get('/feedback/accommodations/:acomodID', feedBackController.getFeedBackList);

api.post('/feedback/register', feedBackController.createFeedBack);

export const feedbackRoutes = api;

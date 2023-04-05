import express from "express";
import { feedBackController } from "../controllers/feedback.js";

const api = express.Router();

api.get('/feedback/accommodations/:acomodID', feedBackController.getFeedBackList);


export const userRoutes = api;

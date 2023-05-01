import express from "express";
import { accommodationsController } from "../controllers/index.controller";

const api = express.Router();

api.get('/accommodations', accommodationsController.getAllAccommodations);

api.get('/accommodations/:id', accommodationsController.getAccommodationsForId);

export const accommodationsRoutes = api;

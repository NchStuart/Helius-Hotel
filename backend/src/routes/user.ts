import express from "express";
import { userController } from "../controllers/user";

const api = express.Router();

api.post("/user/register", userController.insertUser)

export const userRoutes = api

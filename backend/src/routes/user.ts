import express from "express";
import { userController } from "../controllers/user.controller";

const api = express.Router();

api.get("/user/get-user-by-email/:email", userController.getUserByEmail);
api.get("/user/get-user-by-id/:id", userController.getUserById);
api.post("/user/authenticate/", userController.authenticateUser);
api.post("/user/register", userController.createUser);

export const userRoutes = api

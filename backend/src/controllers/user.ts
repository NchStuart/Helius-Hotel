import { Request, Response } from "express";
import { createUser } from "../models/user";
import { User } from "../util/types";

function insertUser(req: Request, res: Response) {
    const user: User = req.body
    createUser(user, function (error: Error) {
        error ? res.status(400).send("Erro ao registrar usuário") : null;
        res.status(200).send("Usuário criado!");
    })
}

export const userController = {
    insertUser
}

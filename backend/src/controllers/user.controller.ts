import { Request, Response } from "express";
import { createUser } from "../models/user.model";
import { User } from "../util/types";
import bcrypt from "bcrypt";

async function insertUser(req: Request, res: Response) {
    const user: User = req.body;
    const {password} = user;

    const hashPassword = await bcrypt.hash(password, 10);
    user.password = hashPassword;

    createUser(user, function (error: Error) {
        error ? res.status(400).send("Erro ao registrar usuário") : null;
        res.status(200).send("Usuário criado!");
    })
}

export const userController = {
    insertUser
}

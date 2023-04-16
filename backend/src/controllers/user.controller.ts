import { Request, Response } from "express";
import { createUser, getUser } from "../models/user.model";
import { User, UserLogin } from "../util/types";
import { constants } from "../constants";
import axios from "axios";
import bcrypt from "bcrypt";

async function insertUser(req: Request, res: Response) {
    const user: User = req.body;
    const {password} = user;

    const hashPassword = await bcrypt.hash(password, 10);
    user.password = hashPassword;

    createUser(user, function (error) {
        error ? res.status(400).send("Erro ao registrar usuário") : null;
        res.status(200).send("Usuário criado!");
    })
}

async function authenticateUser(req: Request, res: Response) {
    const user: UserLogin = req.body;

    const hashedUser = await axios.get(`http://${constants.IP_SERVER}:${constants.PORT_SERVER}/heliusapi/v1/user/get-user-by-email/${user.email}`);

    if(hashedUser.data) {
        const authentication = await bcrypt.compare(user.password, hashedUser.data.senha);
        authentication ? res.status(202).send(authentication) : res.status(401).send(authentication);
    } else {
        res.status(400).send("Usuário não encontrado");
    }
}

function getUserByEmail(req: Request, res: Response) {
    const {email} = req.params
    getUser(email, function (error: Error, result: String) {
        error ? res.status(400).send(`Erro ao retornar usuário: ${error}`) : null;
        res.status(200).json(result);
    })
}

export const userController = {
    insertUser,
    authenticateUser,
    getUserByEmail
}

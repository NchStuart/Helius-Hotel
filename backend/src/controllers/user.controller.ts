import { Request, Response } from "express";
import { insertUser, getUser } from "../models/user.model";
import { User, UserLogin } from "../util/types";
import { constants } from "../constants";
import axios from "axios";
import bcrypt from "bcrypt";

async function createUser(req: Request, res: Response) {
    const user: User = req.body;

    const hashPassword = await bcrypt.hash(user.password, 10);
    user.password = hashPassword;
    console.log(user)
    insertUser(user, function (error) {
        if(error) {
            console.error(error)
            res.status(400).send("Erro ao registrar usuário");
        } else {
            res.status(200).send("Usuário criado");
        }
    })
}

async function authenticateUser(req: Request, res: Response) {
    const user: UserLogin = req.body;

    const hashedUser = await axios.get(`http://${constants.IP_SERVER}:${constants.PORT_SERVER}/heliusapi/v1/user/get-user-by-email/${user.email}`);

    if(hashedUser.data) {
        const authentication: Boolean = await bcrypt.compare(user.password, hashedUser.data.senha);
        delete hashedUser.data.senha;
        const resJSON: User = {...hashedUser.data};
        authentication ? res.status(202).json(resJSON) : res.status(401).send(authentication);
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
    createUser,
    authenticateUser,
    getUserByEmail
}

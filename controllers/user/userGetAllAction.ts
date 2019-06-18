import {Request, Response} from "express";
import {getManager} from "typeorm";
import { User } from "../../models/User";

const  userGetAllAction = async (request: Request, response: Response) => {

    const userRepository = getManager().getRepository(User);
    const users = await userRepository.find();

    response.send(users);
};

export default userGetAllAction;

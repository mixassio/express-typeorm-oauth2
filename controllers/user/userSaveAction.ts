import {Request, Response} from "express";
import {getManager} from "typeorm";
import { User } from "../../models/User";


const userSaveAction = async (request: Request, response: Response) => {
    console.log(request.body);
    const userRepository = getManager().getRepository(User);
    const newUser = userRepository.create(request.body);

    await userRepository.save(newUser);
    response.send(newUser);
};

export default userSaveAction;



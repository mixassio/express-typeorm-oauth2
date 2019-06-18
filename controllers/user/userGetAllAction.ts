import {Request, Response} from "express";
import {getManager} from "typeorm";
import { User } from "../../models/User";

/**
 * Loads all posts from the database.
 */
const  userGetAllAction = async (request: Request, response: Response) => {

    // get a post repository to perform operations with post
    const userRepository = getManager().getRepository(User);

    // load a post by a given post id
    const users = await userRepository.find();

    // return loaded posts
    response.send(users);
};




export default userGetAllAction;

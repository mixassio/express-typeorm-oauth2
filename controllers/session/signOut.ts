import { Request, Response } from "express";
import { getManager } from "typeorm";
import { User } from "../../models/User";

const signOut = async (request: Request, response: Response) => {
    request.session = {};
}
export default signOut;





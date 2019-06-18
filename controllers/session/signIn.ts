import { Request, Response } from "express";
import { getManager } from "typeorm";
import { User } from "../../models/User";

const signIn = async (request: Request, response: Response) => {
    const { email, password } = request.body;
    const userRepository = getManager().getRepository(User);
    const user = await userRepository.findOne({ email });
    if (user && user.password === password) {
        request.session.userId = user.id;
        return;
    }
    const errors = [];
      if (!user) {
        errors.push({ message: 'User not registration', path: 'email' });
      } else {
        errors.push({ message: 'Wrong password', path: 'password' });
      }
      response.send(errors);
}

export default signIn;

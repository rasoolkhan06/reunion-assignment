import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { getRepository } from "typeorm";
import { User } from "../entity/user.entity";
import * as bcrypt from "bcryptjs";

class AuthController {
    static authenticate = async (req: Request, res: Response) => {
        try { 
            const { email, password } = req.body;

            // Validate user input
            if (!(email && password)) {
                res.status(400).send("All input is required");
            }

            const userRepository = getRepository(User);

            const user: User | undefined = await userRepository.findOne({ email: email });

            if (!user) {
                //Encrypt user password
                const encryptedPassword: string = await bcrypt.hashSync(password, 10);

                //create new user
                const newUser = new User(email, encryptedPassword, email);
                await userRepository.save(newUser);
            }

            const token = jwt.sign(
                { email: email },
                process.env.TOKEN_KEY,
                {
                  expiresIn: "10d",
                }
            );

            res.status(201).json({token: token});
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }
}

export default AuthController;

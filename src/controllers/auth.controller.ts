import { Request, Response } from "express";
import jwt from 'jsonwebtoken';

class AuthController {
    static authenticate = async (req: Request, res: Response) => {
        try { 
            const { email, password } = req.body;

            // Validate user input
            if (!(email && password)) {
                res.status(400).send("All input is required");
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

import { getRepository } from "typeorm";
import { User } from "../entity/user.entity";

class UserController {
    static getUser = async(req, res, next) => {
        const email: string = req.email;
        const userRepository = getRepository(User);

        const user: User | undefined = await userRepository.findOne({ email: email });
        if (!user) {
            res.status(404).send({ message: "User not found!" });
            return;
        }

        res.status(200).send(user);
        return "pong";
    };
}

export default UserController;

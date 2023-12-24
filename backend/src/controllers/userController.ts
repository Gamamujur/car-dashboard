import { Request, Response } from "express";
import { encryptPass } from "../utilities/encryptPassword";
import { checkPass } from "../utilities/checkPassword";
import UserService from "../services/userService";

const jwt = require("jsonwebtoken");

const validRole = ["admin", "member"];

const getUser = async (req: Request, res: Response) => {
    try {
        // @ts-ignore
        return res.status(200).json({ Success: req.user });
    } catch (error) {
        /* istanbul ignore next */
        return res.status(401).json({ message: "Unauthorized" });
    }
};

// Register
const registerUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const role = "member";

        const caseEmail = email.toLowerCase();
        const emailExist = await new UserService().getByEmail(caseEmail);

        if (emailExist) {
            return res
                .status(400)
                .json({ message: "Email already registered" });
        }

        // Encrypt password
        const hashPass = await encryptPass(password);
        const stringHash = String(hashPass);
        const userId = Math.floor(Math.random() * 900) + 100;

        const data = {
            id : userId,
            email: caseEmail,
            password: stringHash,
            role,
        };

        const sendData = await new UserService().postUser(data);

        if (!sendData) {
            return res.status(500).json({ message: "Error while registering" });
        }

        return res
            .status(201)
            .json({ message: "User Successfully Registered" });
    } catch (error) {
        /* istanbul ignore next */ // @ts-ignore
        return res.json({ "Error Message": error.message });
    }
};

// Login
const loginFunction = async (req: Request, res: Response) => {
    try {
        const email = req.body.email.toLowerCase();
        const password = req.body.password;

        const userFound = await new UserService().getByEmail(email);

        if (!userFound) {
            return res.status(404).json({ Error: "Email Not Found" });
        }

        const isPassCorrect = await checkPass(password, userFound.password);

        if (!isPassCorrect) {
            return res.status(401).json({ Error: "Invalid Password" });
        }

        const token = jwt.sign(
            {
                id: userFound.id,
                email: userFound.email,
                role: userFound.role,
            },
            "CAR-DASH",
        );

        return res.status(200).json({
            status: 200,
            "Logged In": token,
        });
    } catch (error) {
        return res.status(400).json({ message: error });
    }
};

const patchFunction = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const role = req.body.role.toLowerCase();

        if (!validRole.includes(role)) {
            return res.status(404).json({ message: "Desired Role Not Found" });
        }

        const updateRole = await new UserService().patchUser(role, Number(id));

        return res.status(200).json({ message: "User Data Updated", data : updateRole});
        /* istanbul ignore next */
    } catch (error) {
        /* istanbul ignore next */
        return res.status(400).json({message : error})
    }
};

export { registerUser, loginFunction, getUser, patchFunction };

import { Router } from "express";
import {
    loginFunction,
    registerUser,
    getUser,
    patchFunction,
} from "../controllers/userController";
import authorizeToken from "../middleware/authentication";

const userRouter = Router();

userRouter.get("/getUser", authorizeToken([]), getUser);
userRouter.post("/register", registerUser);
userRouter.post("/login", loginFunction);
userRouter.put('/edit-user/:id',authorizeToken(['superadmin']),patchFunction)

export default userRouter;
import { Router } from "express";

import {
    deleteCar,
    getById,
    getList,
    postCar,
    updateCar,
} from "../controllers/carsController";

const carRouter = Router();

carRouter.get("/", getList);
carRouter.get("/get/:id", getById);
carRouter.post("/post-car", postCar);
carRouter.put("/car-edit/:id", updateCar);
carRouter.delete("/car-delete/:id", deleteCar);

export default carRouter;

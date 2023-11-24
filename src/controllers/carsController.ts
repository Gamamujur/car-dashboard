import { Request, Response } from "express";
import imageUpload from "../middleware/cloudinary";
import CarService from "../../src/services/carService";
import { CarData } from "../repositories/cars";
import LogService from "../services/logService";
import { LogData } from "../repositories/logs";

// GET LIST
const getList = async (req: Request, res: Response) => {
    try {
        const data = await new CarService().getAll();
        res.json(data);
    } catch (error) {
        console.error("Error connecting:", error);
        res.status(500).send("Error connecting");
    }
};

// GET BY ID
const getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const data = await new CarService().getCarByID(Number(id));
        res.json(data);
    } catch (error) {
        console.error("Error connecting:", error);
        res.status(500).send(
            "Error connecting. Connection Error or Data not Found"
        );
    }
};

// CREATE / POST
const postCar = async (req: Request, res: Response) => {
    const { name, id_car_type, id_car_brand, daily_price, size } = req.body;
    const image = req.file;

    if (!image || !name || !daily_price || !size) {
        return res.status(400).json({
            error: "Please fill empty field.",
        });
    }

    try {
        const uploadImage = await imageUpload(image);
        const data: CarData = {
            name,
            id_car_type,
            id_car_brand,
            daily_price,
            size,
            image: uploadImage.url,
        };

        const result = await new CarService().postCar(data);

        // @ts-ignore
        const userId = req.user.id;
        const newCarId = result.id;

        const logData: LogData = {
            id_car: newCarId,
            id_user: userId,
            action: "post",
        };

        const postLog = await new LogService().postData(logData);

        return res.status(200).json({ message: "Data submitted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Error in post",
        });
    }
};

// UPDATE
const updateCar = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, id_car_type, id_car_brand, daily_price, size } = req.body;
    let image;

    if (req.file) {
        image = req.file;
    } else {
        image = req.body.image;
    }

    if (
        !image ||
        !name ||
        !daily_price ||
        !size ||
        !id_car_type ||
        !id_car_brand
    ) {
        return res.status(400).json({
            error: "Please fill empty field.",
        });
    }
    try {
        let uploadImage: string | object;

        if (typeof image !== "string") {
            const uploadFile = await imageUpload(image);
            uploadImage = uploadFile.url;
        } else {
            uploadImage = image;
        }

        const data: CarData = {
            name,
            id_car_type,
            id_car_brand,
            daily_price,
            size,
            image: uploadImage,
        };

        const updatedCar = await new CarService().patchCar(data, Number(id));

        // @ts-ignore
        const userId = req.user.id;

        const logData: LogData = {
            id_car: Number(id),
            id_user: userId,
            action: "put",
        };

        const postLog = await new LogService().postData(logData);

        return res.json({ message: "Car data updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: `Error while updating`,
        });
    }
};

const deleteCar = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        // @ts-ignore
        const userId = req.user.id;

        const logData: LogData = {
            id_car: Number(id),
            id_user: userId,
            action: "delete",
        };
        const deletedCar = await new CarService().deleteCar(Number(id));
        const postLog = await new LogService().postData(logData);
        return res.json({ message: "Delete Car Success" });
    } catch (error) {
        return res.status(500).json({ "Error while Deleting": error });
    }
};

export { getList, postCar, getById, updateCar, deleteCar };

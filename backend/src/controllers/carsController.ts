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
        res.status(500).send("Error connecting");
    }
};

// GET BY ID
const getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const data = await new CarService().getCarByID(Number(id));
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send(
            "Error connecting. Connection Error or Data not Found"
        );
    }
};

// CREATE / POST
const postCar = async (req: Request, res: Response) => {
    const {
        name,
        id_car_type,
        id_car_brand,
        daily_price,
        size,
        start_rent,
        finish_rent,
        capacity,
        description,
        transmission,
        year,
        available_at,
    } = req.body;
    const image = req.file;

    if (!image || !name || !daily_price || !size) {
        /* istanbul ignore next */
        return res.status(400).json({
            error: "Please fill empty field.",
        });
    }

    try {
        const uploadImage = await imageUpload(image);
        const convertPrice = Number(daily_price);
        const data: CarData = {
            name,
            id_car_type,
            id_car_brand,
            daily_price: convertPrice,
            size,
            image: uploadImage.url,
            start_rent,
            finish_rent,
            capacity,
            description,
            transmission,
            year,
            available_at,
        };

        const result = await new CarService().postCar(data);

        if (result !== undefined) {
            /* istanbul ignore next */ // @ts-ignore
            const userId = req.user.id ?? 0;
            /* istanbul ignore next */ // @ts-ignore
            const newCarId = result.id ?? 0;

            /* istanbul ignore next */
            const logData: LogData = {
                id_car: newCarId,
                id_user: userId,
                action: "post",
            };

            const postLog = await new LogService().postData(logData);
        }

        return res.status(200).json({ message: "Data submitted successfully" });
    } catch (error) {
        res.status(500).json({
            error: "Error in post",
            // @ts-ignore
            error_status: error.message,
        });
    }
};

// UPDATE
const updateCar = async (req: Request, res: Response) => {
    const { id } = req.params;
    const {
        name,
        id_car_type,
        id_car_brand,
        daily_price,
        size,
        start_rent,
        finish_rent,
        capacity,
        description,
        transmission,
        year,
        available_at,
    } = req.body;

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
            start_rent,
            finish_rent,
            capacity,
            description,
            transmission,
            year,
            available_at,
        };

        const updatedCar = await new CarService().patchCar(data, Number(id));

        if (updatedCar !== undefined) {
            /* istanbul ignore next */ // @ts-ignore
            const userId = req.user.id;
            /* istanbul ignore next */
            const logData: LogData = {
                id_car: Number(id),
                id_user: userId,
                action: "put",
            };

            const postLog = await new LogService().postData(logData);
        }

        return res
            .status(200)
            .json({ message: "Car data updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: `Error while updating`,
            // @ts-ignore
            error_message: error.message,
        });
    }
};

const deleteCar = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const deletedCar = await new CarService().deleteCar(Number(id));

        if (deletedCar !== undefined) {
            /* istanbul ignore next */  // @ts-ignore
            const userId = req.user.id;
            /* istanbul ignore next */ 
            const logData: LogData = {
                id_car: Number(id),
                id_user: userId,
                action: "delete",
            };
            const postLog = await new LogService().postData(logData);
        }
        return res.json({ message: "Delete Car Success", status: 200 });
    } catch (error) {
        return res.status(500).json({ "Error while Deleting": error });
    }
};

export { getList, postCar, getById, updateCar, deleteCar };

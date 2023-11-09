import { Request, Response } from "express";
import imageUpload from "../middleware/cloudinary";
import { CarModel } from "../../models/CarModel";

// GET LIST
const getList = async (req: Request, res: Response) => {
    try {
        const data = await CarModel.query();
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
        const data = await CarModel.query().findById(id).throwIfNotFound();
        res.json(data);
    } catch (error) {
        console.error("Error connecting:", error);
        res.status(500).send("Error connecting.");
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

        const result = await CarModel.query()
            .insert({
                name,
                id_car_type,
                id_car_brand,
                daily_price,
                size,
                image: uploadImage.url,
            })
            .returning("*");

        res.json(result);
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

        const updatedCar = await CarModel.query()
            .where({ id })
            .update({
                name,
                id_car_type,
                id_car_brand,
                daily_price,
                size,
                image: uploadImage,
            })
            .returning("*");

        res.json(updatedCar);
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
        const deletedCar = await CarModel.query()
            .where({ id })
            .del()
            .throwIfNotFound()
            .returning("*");

        res.json({ message: "Delete Success", deletedData: deletedCar });
    } catch (error) {
        res.status(500).send("Error while Deleting");
    }
};

export { getList, postCar, getById, updateCar, deleteCar };

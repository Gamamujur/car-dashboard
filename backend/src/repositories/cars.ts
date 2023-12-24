import { CarModel } from "../../models/CarModel";

export type CarData = {
    name: string;
    id_car_type: number;
    id_car_brand: number;
    daily_price: number;
    size: string;
    image: string;
    start_rent: Date;
    finish_rent: Date;
    capacity: number;
    description: string;
    transmission: string;
    year: number | string;
    available_at: Date;
};
/* istanbul ignore next */
class CarRepository {
    async getAll() {
        const getAllCar = await CarModel.query();
        return getAllCar;
    }

    async getCarById(id: number) {
        const getCarById = await CarModel.query()
            .findById(id)
            .throwIfNotFound();
        return getCarById;
    }

    async postCar(data: CarData) {
        
            const result = await CarModel.query().insert(data).returning("*");
            return result;
        
    }

    async patchCar(data: CarData, id: number) {
        const result = await CarModel.query()
            .where({ id })
            .update(data)
            .returning("*");
        return result;
    }

    async deleteCar(id: number) {
        const result = await CarModel.query()
            .where({ id })
            .del()
            .throwIfNotFound()
            .returning("*");
        return result;
    }
}

export default CarRepository;

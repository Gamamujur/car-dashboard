import CarRepository from "../repositories/cars";
import { CarData } from "../repositories/cars";
/* istanbul ignore next */
export default class CarService {
    private carRepository: CarRepository;

    constructor() {
        this.carRepository = new CarRepository();
    }

    async getAll() {
        return await this.carRepository.getAll();
    }

    async getCarByID(id: number) {
        return await this.carRepository.getCarById(id);
    }

    async postCar(data: CarData) {
        const result = await this.carRepository.postCar(data);
        return result;
    }

    async patchCar(data: CarData, id: number) {
        return await this.carRepository.patchCar(data, id);
    }

    async deleteCar(id: number) {
        return await this.carRepository.deleteCar(id);
    }
}

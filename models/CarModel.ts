import { Model, ModelObject } from "objection";

export class CarModel extends Model {
    id!: number;
    name!: string;
    id_car_type!: number;
    id_car_brand!: number;
    daily_price!: number;
    size!: string;
    image!: string;
    created_at!: string;
    updated_at!: string;

    static get tableName() {
        return "car";
    }
}

export type CarType = ModelObject<CarModel>;

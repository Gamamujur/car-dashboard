import { Model, ModelObject } from "objection";

export class LogModel extends Model {
    id!: number;
    id_car!: number;
    id_user!: number;
    action!: string;
    created_at!: string;
    updated_at!: string;

    static get tableName() {
        return "log_activities";
    }
}

export type LogType = ModelObject<LogModel>;

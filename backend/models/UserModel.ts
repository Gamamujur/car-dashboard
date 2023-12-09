import { Model, ModelObject } from "objection";

export class UserModel extends Model {
    id!: number;
    email!: string;
    password!: string;
    role!: string;
    created_at!: string;
    updated_at!: string;

    static get tableName() {
        return "users";
    }
}

export type UserType = ModelObject<UserModel>;

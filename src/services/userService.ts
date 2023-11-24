import UserRepository from "../repositories/users";
import { UserData } from "../repositories/users";

export default class UserService {
    private userConstructor: UserRepository;

    constructor() {
        this.userConstructor = new UserRepository();
    }

    async getAll() {
        return await this.userConstructor.getAll();
    }

    async getByEmail(value: string) {
        return await this.userConstructor.getByEmail(value);
    }

    async postUser(data: UserData){
        return await this.userConstructor.postData(data)
    }

    async patchUser(value: string, id:number){
        return await this.userConstructor.patchData(value,id)
    }
}

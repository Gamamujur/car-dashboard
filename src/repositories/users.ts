import { UserModel } from "../../models/UserModel";

export type UserData = {
    email : string,
    password : string,
    role : string
}

class UserRepository {
    async getAll() {
        const result = await UserModel.query();
        return result;
    }

    async getByEmail(value: string) {
        const result = await UserModel.query().where({email: value}).first().returning('*');
        return result;
    }

    async postData(data : UserData){
        const result = await UserModel.query().insert(data).returning('*')
        return result
    }

    async patchData (value: string, id: number){
        const result = await UserModel.query().where({id}).patch({role : value}).returning(['id','email','role','created_at','updated_at'])
        return result
    }

}

export default UserRepository;
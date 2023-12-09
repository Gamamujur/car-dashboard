import { LogModel } from "../../models/LogModel";

export type LogData = {
    id_car: number;
    id_user: number;
    action: string;
};

class LogRepository {
    async postLog(data: LogData) {
        const result = await LogModel.query().insert(data).returning("*");
        return result
    }
}

export default LogRepository;

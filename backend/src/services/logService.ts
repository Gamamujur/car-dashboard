import LogRepository from "../repositories/logs";
import { LogData } from "../repositories/logs";

export default class LogService {
    private logConstructor : LogRepository;

    constructor(){
        this.logConstructor = new LogRepository()
    }

    async postData(data : LogData){
        return await this.logConstructor.postLog(data)
    }
}
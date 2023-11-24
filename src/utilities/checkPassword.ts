const bcrypt = require("bcryptjs");

const checkPass = (password: string, encryptedPassword : string) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, encryptedPassword, (err: Error, isPassCorrect: string) => {
            if (!!err) {
                reject(err);
                return;
            }
            resolve(isPassCorrect);
        });
    });
};

export { checkPass };

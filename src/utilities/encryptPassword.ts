const bcrypt = require("bcryptjs");
const salt = 10;

const encryptPass = (password: string) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, salt, (err: Error, encryptedPassword: string) => {
            if (!!err) {
                reject(err);
                return;
            }
            resolve(encryptedPassword);
        });
    });
};

export { encryptPass };

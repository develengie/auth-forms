import { constants } from '../constants/constants';

class Validator {
    isEmail(email: string) {
        return constants.emailRegExp.test(email);
    }

    min(password: string) {
        return password.length >= constants.minPasswordLength;
    }
}

export const validator = new Validator();

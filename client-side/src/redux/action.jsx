import { USER_LOGIN, USER_ADDRESS} from "./actionTypes";

export const userData = (payload) => {
    return { type: USER_LOGIN, payload };
}
export const user_address = (payload) => {
    return { type: USER_ADDRESS, payload };
}


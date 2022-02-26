import { USER_LOGIN, USER_ADDRESS } from "./actionTypes";

const init = {
  user: {},
  user_address: {}
}

export const reducer = (store=init, { type, payload }) => {
    switch (type) {
      case USER_LOGIN: {
        return { ...store, user: payload };
      }
      case USER_ADDRESS: {
        return { ...store, user_address: payload };
      }
      default:
        return store;
    }
}
import { CLEAR_TOKEN, SET_TOKEN } from '../actionType/index';

export const setToken = payload => {
    return {
        type: SET_TOKEN,
        payload: payload,
    };
};
export const clearToken = () => {
    return {
        type: CLEAR_TOKEN,
    };
};

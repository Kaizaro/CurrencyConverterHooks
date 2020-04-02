import {CLEAR_TOKEN, SET_TOKEN} from '../types/authTypes';

export const setToken = token => ({
    type: SET_TOKEN,
    payload: token,
});

export const clearToken = () => ({
    type: CLEAR_TOKEN,
});

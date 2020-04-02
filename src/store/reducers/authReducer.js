// Initial state
import {CLEAR_TOKEN, SET_TOKEN} from '../types/authTypes';

const initialState = {
    token: 'kurwa',
};

// Reducer
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload,
            };

        case CLEAR_TOKEN:
            return {
                ...state,
                token: '',
            };

        // default
        default: {
            return state;
        }
    }
};

export default authReducer;

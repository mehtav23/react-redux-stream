import { IS_LOADING_ON, IS_LOADING_OFF } from '../actions/types';

const INITIAL_STATE = {
    isLoading: false,
};


export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case IS_LOADING_ON:
            return {...state, isLoading: true};
        case IS_LOADING_OFF:
            return {...state, isLoading: false };
        default:
            return state;
    }
}
import streams from '../apis/streams';
import createBrowserHistory from '../history';

import {
        SIGN_IN, SIGN_OUT, IS_LOADING_OFF, IS_LOADING_ON,
        CREATE_STREAM,
        FETCH_STREAMS, 
        FETCH_STREAM,  
        DELETE_STREAM, 
        EDIT_STREAM   }  from './types';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const isLoadingOn = () => {
    return {
        type: IS_LOADING_ON,

    }
}

export const isLoadingOff = () => {
    return {
        type: IS_LOADING_OFF,

    }
}
// arrow function return thunk function
export const createStream = (formValues) => {
    return async (dispatch, getState) =>{
        const { userId } = getState().auth;
        const response = await streams.post('/streams', {...formValues, userId});
        dispatch({type: CREATE_STREAM, payload: response.data});
        createBrowserHistory.push('/');
    }
}

export const fetchStreams = () => {
    return async (dispatch) => {
        const response = await streams.get('/streams');

        dispatch({ type: FETCH_STREAMS, payload: response.data});
    }
};

export const fetchStream = (id) => {
    return async (dispatch) => {
        const response = await streams.get(`/streams/${id}`);

        dispatch({type: FETCH_STREAM, payload: response.data});
    }
}

export const editStream = (id, formValues) => {
    return async (dispatch) => {
        const response = await streams.patch(`/streams/${id}`, formValues);

        dispatch({type: EDIT_STREAM, payload: response.data});
        createBrowserHistory.push('/');
    }
}

export const deleteStream = (id) => {
    return async (dispatch) => {
        await streams.delete(`/streams/${id}`);

        dispatch({type: DELETE_STREAM, payload: id});
        createBrowserHistory.push('/');
    }
}


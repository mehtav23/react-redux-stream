import {combineReducers } from 'redux';
import {reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';
import appReducer from './appReducer';
import streamReducers from './streamReducers';

export default combineReducers({
    auth: authReducer,
    appState: appReducer,
    form: formReducer,
    streams: streamReducers
});
import {IS_LOGGEDIN, IS_ERROR, IS_LOADING} from './Actions';
import {initialState} from './InitialState';
import {combineReducers} from "redux";

const setLogin = (state = initialState.login, action) => {
    switch (action.type) {
        case IS_LOGGEDIN:
            return action.login;
        default:
            return state;
    }
}

const setError = (state = initialState.err, action) => {
    switch (action.type) {
        case IS_ERROR:
            return action.err;
        default:
            return state;
    }
}

const setLoading = (state = initialState.loading, action) => {
    switch (action.type) {
        case IS_LOADING:
            return action.loading;
        default:
            return state;
    }
}

export const reducer = combineReducers({
    login: setLogin,
    err: setError,
    loading: setLoading
})
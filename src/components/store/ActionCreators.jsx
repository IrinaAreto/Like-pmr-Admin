import {IS_LOGGEDIN, IS_ERROR, IS_LOADING} from './Actions';

export function loginHasDone(boolLogin) {
    return {
        type: IS_LOGGEDIN,
        login: boolLogin
    };
}

export function errorHasSet(boolErr) {
    return {
        type: IS_ERROR,
        err: boolErr
    };
}

export function itemsAreLoading(boolLoad) {
    return {
        type: IS_LOADING,
        loading: boolLoad
    };
}
import {loginUrl} from "../helpers/Url";
import {loginHasDone, errorHasSet, itemsAreLoading} from "./ActionCreators";

export function fetchAuth(submitValues) {
    return async (dispatch) => {
        dispatch(errorHasSet(false));
        dispatch(itemsAreLoading(true));

        try {
            let response = await fetch(loginUrl, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(submitValues),
            });
            const result = await response;

            if (result.status === 200) {
                dispatch(loginHasDone(true));
            } else {
                dispatch(loginHasDone(false));
            }
        } catch (error) {
            dispatch(errorHasSet(true));
        }

        dispatch(itemsAreLoading(false));
    }
}

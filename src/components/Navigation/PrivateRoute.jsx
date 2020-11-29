import React from "react";
import {useSelector} from "react-redux";
import {BrowserRouter as Route, Redirect} from "react-router-dom";

export function PrivateRoute({children, ...rest}) {
    const isLoggedIn = useSelector((state) => state.login);

    return (
        <Route
            {...rest}
            render={(props) =>
                isLoggedIn ? (
                    children
                ) :
                    <Redirect
                        to={{
                            pathname: "/login", state: {from: props.location}
                        }}
                    />
                }
        />
    );
}

import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect, useHistory, useLocation} from "react-router-dom";
import {PrivateRoute} from "./PrivateRoute";
import {LoginPage} from "../LoginPage/LoginPage";
import {MenuLink} from "./MenuLink";
import {AddNew} from "../NewsPage/AddNew";
import {AddMenuItem} from "../MenuPage/AddMenuItem";
import {AddComments} from "../CommentsPage/AddComments";
import {NoPageFound} from "../NotFound/NoPageFound";
import {Home} from "../HomePage/Home";
import styles from "./stylesNavigation.module.css";

export function NavigationRouters() {
    return (
        <Router>
            <nav className={styles.navigationMenu}>
                <ul className={styles.menuLinks}>
                    <li><MenuLink href="/">главная</MenuLink> </li>
                    <li><MenuLink href="/news">новости</MenuLink></li>
                    <li><MenuLink href="/menu">меню</MenuLink></li>
                    <li><MenuLink href="/comment">отзывы</MenuLink></li>
                </ul>
            </nav>
            <main className={styles.mainPart}>
                {/*<AuthButton/>*/}
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={LoginPage}/>
                    <PrivateRoute path="/news"><AddNew/></PrivateRoute>
                    <PrivateRoute path="/menu"><AddMenuItem/></PrivateRoute>
                    <PrivateRoute path="/comment"><AddComments/></PrivateRoute>
                    <Route component={NoPageFound}/>
                </Switch>
            </main>
        </Router>
    )
}

/*
export const fakeAuth = {
    isLoggedIn: false,
    logIn(cb) {
        fakeAuth.isLoggedIn = true;
        setTimeout(cb, 100);
    },
    signOut(cb) {
        fakeAuth.isLoggedIn = false;
        setTimeout(cb, 100);
    }
}

export function AuthButton() {
    let history = useHistory();

    return fakeAuth.isLoggedIn ?
        (
            <div><p>welcome!</p>
                <button onClick={() => {
                    fakeAuth.signOut(() => history.push("/login"))
                }}>sign out
                </button>
            </div>
        ) : (
            <div>you are not logged in</div>
        )
}

*/


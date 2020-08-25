import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MenuLink } from "./MenuLink";
import { AddNew } from "./AddNew";
import { AddMenuItem } from "./AddMenuItem";
import { AddComments } from "./AddComments";
import { NoPageFound } from "./NoPageFound";
import "./stylesNavigation.css";

export function NavigationRouters() {
    return (
        <Router>
            <nav className="navigationmenu">
                <ul className="menu-links">
                    <li><MenuLink href="/news">новости</MenuLink></li>
                    <li><MenuLink href="/menuItem">меню</MenuLink></li>
                    <li><MenuLink href="/comment">отзывы</MenuLink></li>
                </ul>
            </nav>
            <main className="mainpart">
                <Switch>
                    <Route path="/news" component={AddNew}></Route>
                    <Route path="/menuItem" component={AddMenuItem}></Route>
                    <Route path="/comment" component={AddComments}></Route>
                    <Route component={ NoPageFound } />
                </Switch>
            </main>
        </Router>
    )
}
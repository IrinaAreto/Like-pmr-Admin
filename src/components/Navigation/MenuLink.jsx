import React from "react";
import {useLocation} from "react-router-dom";
import styles from "./stylesMenuLink.module.css";

export function MenuLink({children, href, ...restProps}) {
    const className = `${styles.menuButton} ${
        useLocation().pathname === href ? styles.active : ""
    }`;

    return (
        <a href={href} className={className} {...restProps}>
            {children}
        </a>
    );
}

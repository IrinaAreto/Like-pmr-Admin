import React from "react";
import styles from "./stylesHeader.module.css";

export function PageHeader() {
    return (
        <div className={styles.headerContainer}>
            <img src="/img/logo.jpg" alt="fast-food-like-logo"/>
        </div>
    );
}

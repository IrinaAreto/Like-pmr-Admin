import React from "react";
import styles from "./stylesNoPageFound.module.css";

export function NoPageFound() {
    return (
        <div className={styles.notFound}>
            <img src="/img/noPageFound.png" alt="no-page-found"/>
            <p>404... Страница не найдeна...</p>
        </div>
    );
}

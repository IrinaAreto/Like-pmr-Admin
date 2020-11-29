import React from "react";
import styles from "./stylesFooter.module.css";

export function PageFooter() {
    return (
        <div>
            <p className={styles.copyright}>2018-2020 &copy; Fast Food Like</p>
            <p className={styles.copyDev}>Разработка сайта: Ирина Малкуш</p>
        </div>
    )
}
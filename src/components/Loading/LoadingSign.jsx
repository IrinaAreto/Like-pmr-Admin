import React from "react";
import styles from "./stylesLoading.module.css";

export function LoadingSign() {
    return (
        <div className={styles.container}>
            <div className={styles.loading}>
                <div className={styles.circles}>
                    <div className={styles.bubble}>
                        <div className={styles.circle}/>
                    </div>
                    <div className={styles.bubble}>
                        <div className={styles.circle}/>
                    </div>
                    <div className={styles.bubble}>
                        <div className={styles.circle}/>
                    </div>
                    <div className={styles.bubble}>
                        <div className={styles.circle}/>
                    </div>
                    <div className={styles.bubble}>
                        <div className={styles.circle}/>
                    </div>
                    <div className={styles.bubble}>
                        <div className={styles.circle}/>
                    </div>
                    <div className={styles.bubble}>
                        <div className={styles.circle}/>
                    </div>
                    <div className={styles.bubble}>
                        <div className={styles.circle}/>
                    </div>
                    <div className={styles.bubble}>
                        <div className={styles.circle}/>
                    </div>
                    <div className={styles.bubble}>
                        <div className={styles.circle}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
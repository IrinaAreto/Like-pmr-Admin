import React, {useState} from "react";
import styles from "./stylesLogin.module.css";
import {useInput} from "./UseInput";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuth} from "../store/Middleware";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {LoadingSign} from "../Loading/LoadingSign";

export function LoginPage() {
    let [showingPassword, setShowingPassword] = useState(false);
    const showPassword = () => {
        setShowingPassword(!showingPassword);
    }

    const dispatch = useDispatch();

    const {value: loginValue, bind: bindLogin, reset: resetLogin} = useInput("");
    const {value: passwordValue, bind: bindPassword, reset: resetPassword} = useInput("");
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submit: ", loginValue, " ", passwordValue);
        const submitValues = {
            "email": loginValue,
            "password": passwordValue
        }
        dispatch(fetchAuth(submitValues));
        resetLogin();
        resetPassword();
    }

    const isError = useSelector((state) => state.err);
    const isLoading = useSelector((state) => state.loading);

    return (
        <div className={styles.loginContainer}>
            <div className={styles.login}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputLines}>
                        <label className={styles.text}>Логин:</label>
                        <div>
                            <input className={styles.inputLine} type="text" size="30" {...bindLogin} />
                        </div>
                    </div>
                    <div className={styles.inputLines}>
                        <label className={styles.text}>Пароль:</label>
                        <div className={styles.passwordLine}>
                            <input className={styles.inputLine} type={showingPassword ? "text" : "password"}
                                   maxLength="25" size="30" {...bindPassword}/>
                            <FontAwesomeIcon className={styles.customIcon} icon={showingPassword ? faEye : faEyeSlash}
                                             onClick={showPassword}/>
                        </div>
                    </div>
                    <div className={styles.submit}>
                        <button type="submit">Войти</button>
                        {isLoading ? (
                            <LoadingSign/>
                        ) : (<div/>)}
                    </div>
                </form>
            </div>
        </div>
    )
}

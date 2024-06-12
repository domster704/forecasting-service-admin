import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as style from './Login.module.css'
import Input from "../UI/Input/Input";

const Login = (props) => {
    const data = useSelector(state => state.data);
    const dispatch = useDispatch();
    console.log(data);

    return (
        <form className={style.loginContainer}>
            <div className={style.login}>
                <div className={style.header}>
                    <b>Вход</b>
                    {/*<hr/>*/}
                </div>
                <div className={style.body}>
                    <Input placeholder={"Эл. почта @mos.ru или номер телефона"}
                           label={"Логин"}
                           required={true}
                           type="email"/>
                    <Input placeholder={"Пароль"}
                           label={"Пароль"}
                           required={true}
                           type="password"/>
                </div>
                <button type="submit">Войти</button>
            </div>
        </form>
    );
}

export default Login;
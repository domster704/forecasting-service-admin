import React from 'react';
import {useSelector} from "react-redux";
import * as style from './Header.module.css'
import headerLogo from './img/logo.png';
import exitSvg from './img/exit.svg';
import Wrapper from "../UI/Wrapper/Wrapper";

const Header = (props) => {
    const userStore = useSelector(state => state.user);
    console.log(userStore)

    return (
        <header className={style.headerContainer}>
            <Wrapper>
                <div className={style.header}>
                    <img className={!userStore.isLogin && style.isOnlyLogo || ""} src={headerLogo} alt="logo"/>
                    {userStore.isLogin && <div className={style.user}>
                        <p>{userStore.name}</p>
                        <button>
                            <img src={exitSvg} alt="exit"/>
                        </button>
                    </div>}
                </div>
            </Wrapper>
        </header>
    );
}

export default Header;
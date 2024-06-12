import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as style from './EmployeesPage.module.css'

const EmployeesPage = (props) => {
    const data = useSelector(state => state.data);
    const dispatch = useDispatch();
    console.log(data);

    return (
        <div className={style.test}>
            <h1>{123}</h1>
        </div>
    );
}

export default EmployeesPage;
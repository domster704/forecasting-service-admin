import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as style from './EmployeesPage.module.css'
import ToolBar from "./ToolBar/ToolBar";

const EmployeesPage = (props) => {
    const data = useSelector(state => state.data);
    const dispatch = useDispatch();

    return (
        <div className={style.employeesContainer}>
            <ToolBar/>
        </div>
    );
}

export default EmployeesPage;
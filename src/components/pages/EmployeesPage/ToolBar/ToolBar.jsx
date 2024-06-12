import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as style from './ToolBar.module.css';
import Input from "../../../UI/Input/Input";
import search_icon from './img/search_icon.svg';
import add_employee_icon from './img/add_employee.svg';
import save_employee_icon from './img/save_employee.svg';

const ToolBar = (props) => {
    const [isSavedEmployee, setIsSavedEmployee] = React.useState(false);

    const data = useSelector(state => state.data);
    const dispatch = useDispatch();

    const findEmployee = (e, input) => {
        console.log(input.value);
    }

    const handleAddAndSaveEmployee = (e) => {
        setIsSavedEmployee(!isSavedEmployee);
    }

    return (
        <div className={style.toolBar}>
            <Input placeholder="Найти пользователя..."
                   buttonIcon={search_icon}
                   inputStyle={{fontSize: '1em'}}
                   buttonIconOnClick={findEmployee}/>
            <div className={style.newUser}>
                <b>Пользователи</b>
                <button onClick={handleAddAndSaveEmployee}>
                    <img src={isSavedEmployee ? save_employee_icon : add_employee_icon} alt=""/>
                </button>
            </div>
        </div>
    );
}

export default ToolBar;
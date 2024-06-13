import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as style from './EmployeeEdit.module.css'
import Input from "../../../UI/Input/Input";
import Select from "../../../UI/Select/Select";

import closeSvg from "./img/close.svg";

class InputUserData {
    constructor(placeholder,
                label,
                name,
                required = false,
                type = 'text',
                options = []) {
        this.placeholder = placeholder;
        this.label = label;
        this.name = name;
        this.required = required;
        this.type = type;
        this.options = options;
    }
}

const field = [
    new InputUserData("Фамилия", "Фамилия", "last_name", true,),
    new InputUserData("Имя", "Имя", "first_name", true,),
    new InputUserData("Отчество (при наличии)", "middle_name", "patronymic",),
    new InputUserData("@никнейм", "Telegram", "telegram_nickname", true,),
    new InputUserData("В формате @mos.ru", "Адрес эл. почты", "email", true, "email"),
    new InputUserData("+7-ххх-ххх-хх-хх", "Номер телефона", "phone", false, "tel"),
    // Select
    new InputUserData("Выберите организацию", "Место работы", "work_org_id", true, "select",
        [
            {value: "1", label: "ПАО Яндекс"},
            {value: "2", label: "ТОО Асмас"}
        ]),
    new InputUserData("Укажите полную должность", "Должность", "position", true, "text"),
    // Select
    new InputUserData("Настройте права", "Права в системе", "rights", true, "select",
        [{value: "1", label: "Администратор"}]),
]

/**
 *
 * @param employee_id
 * @param isClosable - показывать ли иконку для закрытия
 * @param closeHandler - обработчик закрытия
 * @param submitFormHandler - обработчик submit формы
 * @param buttonFormSubmitRef - ссылка на кнопку для submit формы
 * @returns {JSX.Element}
 * @constructor
 */
const EmployeeEdit = ({
                          employee_id = null,
                          isClosable = false,
                          closeHandler = (e) => {
                          },
                          submitFormHandler = (form) => {
                          },
                          buttonFormSubmitRef = React.useRef(null),
                      }) => {
    const formRef = React.useRef(null);

    const employeeStore = useSelector(state => state.employee);
    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();
        submitFormHandler(formRef.current)
    }

    return (
        <div className={style.employeeEditContainer}>
            <div className={style.employeeEditHeader}>
                <b>Добавление нового пользователя</b>
                {isClosable &&
                    <button onClick={closeHandler}>
                        <img src={closeSvg} alt=""/>
                    </button>
                }
            </div>
            <form ref={formRef} className={style.employeeEditForm} onSubmit={onSubmit}>
                {
                    field.map((item, index) => {
                        return (
                            item.type !== "select" && <Input placeholder={item.placeholder}
                                                             label={item.label}
                                                             required={item.required}
                                                             type={item.type}
                                                             name={item.name}
                                                             key={index}/>
                            ||
                            <Select
                                placeholder={item.placeholder}
                                label={item.label}
                                required={item.required}
                                name={item.name}
                                options={item.options}
                                key={index}/>
                        )
                    })
                }
                <button ref={buttonFormSubmitRef} type="submit"></button>
            </form>
        </div>
    );
}

export default EmployeeEdit;
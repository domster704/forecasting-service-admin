import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as style from './AddingUser.module.css'
import Input from "../../../UI/Input/Input";
import Select from "../../../UI/Select/Select";

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
    new InputUserData("Фамилия", "Фамилия", "surname", true,),
    new InputUserData("Имя", "Имя", "name", true,),
    new InputUserData("Отчество (при наличии)", "Отчество", "patronymic",),
    new InputUserData("@никнейм", "Telegram", "telegram", true,),
    new InputUserData("В формате @mos.ru", "Адрес эл. почты", "email", true, "email"),
    new InputUserData("+7-ххх-ххх-хх-хх", "Номер телефона", "telephone", false, "tel"),
    // Select
    new InputUserData("Выберите организацию", "Место работы", "organization", true, "select",
        [{value: "1", label: "123"}]),
    new InputUserData("Укажите полную должность", "Должность", "position", true, "text"),
    // Select
    new InputUserData("Настройте права", "Права в системе", "rights", true, "select",
        []),
]

const AddingUser = (props) => {
    const data = useSelector(state => state.data);
    const dispatch = useDispatch();

    return (
        <div className={style.addingUserContainer}>
            <b>Добавление нового пользователя</b>
            <form className={style.addingUserForm}>
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
            </form>
        </div>
    );
}

export default AddingUser;
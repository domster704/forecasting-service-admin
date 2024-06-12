import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as style from './Input.module.css'

const Input = ({
                   button = null,
                   placeholder = "",
                   label = "",
                   required = false,
                   type = "text",
                   name = "",
                   onChange = (e) => {
                   },
               }) => {
    const [value, setValue] = React.useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
        onChange(e);
    };

    const inputRef = React.useRef(null);
    const data = useSelector(state => state.data);
    const dispatch = useDispatch();

    return (
        <div className={style.inputContainer}>
            {label && <label>{label}
                {required && <span className={style.required}>*</span>}
            </label>}
            <div className={style.inputBlock} onClick={() => {
                inputRef?.current?.focus();
            }}>
                <input ref={inputRef}
                       placeholder={placeholder}
                       required={required}
                       value={value}
                       type={type}
                       name={name}
                       onChange={handleChange}/>
                {button && <button>
                    <img src={button} alt={button}/>
                </button>}
            </div>
        </div>

    );
}

export default Input;
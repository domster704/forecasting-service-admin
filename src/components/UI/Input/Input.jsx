import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as style from './Input.module.css'

const Input = ({
                   buttonIcon = null,
                   buttonIconOnClick = (e, input) => {
                   },
                   placeholder = "",
                   label = "",
                   required = false,
                   type = "text",
                   name = "",
                   inputStyle = {},
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
            <div>
                <div className={style.inputBlock} onClick={() => {
                    inputRef?.current?.focus();
                }}>
                    <input ref={inputRef}
                           placeholder={placeholder}
                           required={required}
                           value={value}
                           type={type}
                           name={name}
                           style={inputStyle}
                           onChange={handleChange}/>
                    {buttonIcon &&
                        <button className={style.buttonIcon}
                                onClick={(e) => buttonIconOnClick(e, inputRef.current)}
                                type={'button'}>
                            <img src={buttonIcon} alt={buttonIcon}/>
                        </button>
                    }
                </div>
                <p className={style.requiredFiledMessage}>Заполните обязательное поле</p>
            </div>
        </div>
    );
}

export default Input;
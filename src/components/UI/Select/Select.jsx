import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as style from './Select.module.css'
import dropdownIcon from './img/dropdown.svg'

/**
 *
 * @param placeholder
 * @param label
 * @param required
 * @param name
 * @param selectStyle
 * @param onChange
 * @param {Array.<{value: string, label: string}>} options
 * @param {JSX.Element} block
 * @constructor
 */
const Select = ({
                    placeholder = "",
                    label = "",
                    required = false,
                    name = "",
                    selectStyle = {},
                    onChange = (e) => {
                    },
                    options = [],
                    block = null
                }) => {
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
    const [optionLabel, setOptionLabel] = React.useState("");
    const [optionValue, setOptionValue] = React.useState("");

    const selectRef = React.useRef(null);
    const data = useSelector(state => state.data);
    const dispatch = useDispatch();

    const showDropdown = (e) => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    /**
     *
     * @param e
     * @param {{value: string, label: string}} option
     */
    const choseDropdownOptions = (e, option) => {
        e.preventDefault();
        setOptionLabel(option.label);
        setOptionValue(option.value);
    }

    return (
        <div className={style.selectContainer}>
            {label &&
                <label>{label}
                    {required && <span className={style.required}>*</span>}
                </label>
            }
            <div className={`${style.selectBlock} ${isDropdownOpen && style.selectBlockOpen}`} onClick={() => {
                showDropdown()
            }}>
                <input ref={selectRef}
                       placeholder={placeholder}
                       required={required}
                       value={optionLabel}
                       name={name}
                       style={selectStyle}
                       data-options-value={optionValue}
                       onChange={(e) => {
                           setOptionLabel(e.target.value)
                       }}/>
                <button>
                    <img src={dropdownIcon} alt={dropdownIcon}/>
                </button>
                {
                    isDropdownOpen && (block !== null || options.length > 0) &&
                    <div className={style.dropdown}>
                        {
                            block === null && options.length > 0 &&
                            options.map((option, index) => {
                                return <button key={index}
                                               onClick={(e) => choseDropdownOptions(e, option)}
                                >{option.label}</button>
                            })
                        }
                    </div>
                }
            </div>
        </div>
    );
}

export default Select;
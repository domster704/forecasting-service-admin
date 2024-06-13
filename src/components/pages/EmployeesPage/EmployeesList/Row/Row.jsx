import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as style from './Row.module.css'
import editSvg from './img/edit.svg';
import deleteSvg from './img/delete.svg';

const Row = ({
                 index,
                 employee
             }) => {
    const organizations = useSelector(state => state.employee.organizations);
    const types = useSelector(state => state.employee.types);
    const dispatch = useDispatch();

    return (
        <div className={style.row}>
            <b>{employee.index}</b>
            <b>{employee.last_name} {employee.first_name[0]}.{employee.middle_name[0]}</b>
            <p className={style.position}>{employee.position}</p>
            <p className={style.organization}>{organizations[employee.work_org_id].label}</p>
            <p className={style.type}>{types[employee.type]}</p>
            <div className={style.actions}>
                <button>
                    <img src={editSvg} alt=""/>
                </button>
                <button>
                    <img src={deleteSvg} alt=""/>
                </button>
            </div>
        </div>
    );
}

export default Row;
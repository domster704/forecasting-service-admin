import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as style from './Pagination.module.css'

const Pagination = (props) => {
    const data = useSelector(state => state.data);
    const dispatch = useDispatch();

    return (
        <div className={style.block}>
            <h1>{123}</h1>
        </div>
    );
}

export default Pagination;
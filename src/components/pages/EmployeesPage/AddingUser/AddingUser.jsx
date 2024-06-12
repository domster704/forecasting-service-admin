import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as style from './AddingUser.module.css'

const AddingUser = (props) => {
    const data = useSelector(state => state.data);
    const dispatch = useDispatch();

    return (
        <div className={style.block}>
            <h1>{123}</h1>
        </div>
    );
}

export default AddingUser;
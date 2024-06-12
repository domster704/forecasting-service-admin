import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Input from "./components/UI/Input/Input";

const App = () => {
    const data = useSelector(state => state.data);
    const dispatch = useDispatch()
    console.log(data)
    return (
        <div>
            <Input placeholder={"Найти пользователя..."}/>
        </div>
    );
}

export default App;
import React from 'react';
import {useSelector} from "react-redux";

const App = () => {
    const data = useSelector(state => state.data);
    console.log(data)
    return (
        <div>
            <h1>{data.text}</h1>
        </div>
    );
}

export default App;
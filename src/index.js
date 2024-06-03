import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';

import App from './App';

import './style.css';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Suspense fallback={'Loading...'}>
        <Provider store={store}>
            <App/>
        </Provider>
    </Suspense>
);

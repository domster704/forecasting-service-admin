import {configureStore} from '@reduxjs/toolkit'
import dataSlice from "./dataSlice";
import userSlice from "./userSlice";

const store = configureStore({
    reducer: {
        data: dataSlice,
        user: userSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
});

export default store;
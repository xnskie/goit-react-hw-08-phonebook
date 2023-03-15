import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { contactsReducer } from "./contacts-slice";
import { filterReducer } from "./filter-slice";
import { authReducer } from "./auth/slice";
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
        auth: persistReducer(authPersistConfig, authReducer),
    },
});
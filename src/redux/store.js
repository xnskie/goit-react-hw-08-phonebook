import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist';
import { contactsReducer } from "./contacts-slice";
import { filterReducer } from "./filter-slice";
import { authReducer } from "./auth/slice";
import storage from 'redux-persist/lib/storage';

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
];

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
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
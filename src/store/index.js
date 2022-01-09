import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { charactersReducer } from './charactersReducer';

const persistConfig = { key: 'root', storage };

const rootReducer = combineReducers({ characters: charactersReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

export const persistor = persistStore(store);

export default store;


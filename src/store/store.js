// imports block
import AsyncStorage from '@react-native-community/async-storage';
import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger/src';
import {persistStore, persistReducer} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';

// import reducers
import rootReducer from './reducers/index';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['authReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(createLogger())),
);

let persistor = persistStore(store);
export {store, persistor};

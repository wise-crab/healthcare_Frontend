import reduxThunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage/session'; // defaults to localStorage for web
import { persistStore, persistReducer } from 'redux-persist';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

//
export const store = createStore(
  persistedReducer,
  {},
  composeEnhancers(applyMiddleware(reduxThunk))
);
export const persistor = persistStore(store);

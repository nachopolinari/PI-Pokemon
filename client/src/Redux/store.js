//📍Crea y configura el store de redux: se lo conecta a redux devtools si esta descargada o a compose si no. aplica el middleware thunkMiddleware para manejar acciones asincronas.
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer';
import thunkMiddleware from 'redux-thunk';

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhacer(applyMiddleware(thunkMiddleware))
);

export default store;
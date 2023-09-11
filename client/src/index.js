//📍Entry Point de la APP.
//configura y renderiza la aplicación React en el DOM , App será el componente pricipal, lo envuelve BrowserRouter para permitir la navegacion entre componentes segun la url, los envuelve Provider para darles acceso al store

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>

);


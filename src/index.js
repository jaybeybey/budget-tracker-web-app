import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRoutes from './routes';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import store from './store'

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <AppRoutes />
        </Router>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();


import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './routes';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store'

import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <AppRoutes />
        </Router>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();


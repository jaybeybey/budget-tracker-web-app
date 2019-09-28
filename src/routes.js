// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './App';
import expenseList from './components/filter'
import Settings from './components/settings'
import Home from './components/charts'


const AppRoutes = () => (
    <App>
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/Settings" component={Settings} exact/>
            <Route path="/Report" component={expenseList} exact/>
        </Switch>
    </App>
);

export default AppRoutes;
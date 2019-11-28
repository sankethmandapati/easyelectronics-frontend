import React from 'react';
import {Switch, BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import api from '../../utils/api';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Home from '../containers/Home';
import Popover from '../containers/Popovers';
import '../../styles/App.scss';

const ProtectedRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        api.accessToken ? <Component {...props} /> : <Redirect to="login" />
    )} />
);

const AuthenticationRoutes = ({component: Component, ...rest}) => {
    console.log("api.accessToken: ", api.accessToken);
    
    return (
    <Route {...rest} render={(props) => (
        api.accessToken ? <Redirect to="/"  /> : <Component {...props} />
    )} />
);}

export default ({ store }) => (
    <Provider store={ store }>
        <div className="App">
            <Popover />
            <Router>
                <Switch>
                    <AuthenticationRoutes exact path='/login' component={ Login } />
                    <AuthenticationRoutes exact path='/register' component={ Register } />
                    <ProtectedRoute exact path="/*" component={ Home } />
                </Switch>
            </Router>
        </div>
    </Provider>
);
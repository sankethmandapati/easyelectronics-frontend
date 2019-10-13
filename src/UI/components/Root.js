import React from 'react';
import {Switch, BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import api from '../../utils/api';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Home from '../containers/Home';
import '../../styles/App.scss';

const ProtectedRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        api.accessToken ? <Component {...props} /> : <Redirect to="login" />
    )} />
);

export default ({store}) => (
    <Provider store={store}>
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />
                    <ProtectedRoute exact path="/*" component={Home} />
                </Switch>
            </Router>
        </div>
    </Provider>
);
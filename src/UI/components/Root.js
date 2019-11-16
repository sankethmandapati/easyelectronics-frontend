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

export default ({store}) => (
    <Provider store={store}>
        <div className="App">
            <Popover
                headerTitle="Sample Header Title" 
                footerOptions={[{
                    label: 'OK',
                    onClick: () => {},
                }]}
                size="large"
                type="error"
                message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the "
            />
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
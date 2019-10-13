import React, {useEffect} from 'react';
import {Redirect, Switch, Route, Link} from 'react-router-dom';
import Dashboard from './Dashboard';
import Upoad from './Upload';
import '../../styles/home.scss';
const Anything = () => <h1>Anything.</h1>;

export default (props) => {
    useEffect(() => {
        props.authenticate();
    }, []);
    return (
    <div>
        {props.authenticationDone ? (
            props.isAuthenticated ? (
                <div className="home">
                    <div className="home__navigation">
                        <nav>
                            <Link to="/">Home</Link>
                            {
                                props.userDetails.role === 'admin' ? (
                                    <Link to="/upload">Upload Video</Link>
                                ) : null
                            }
                        </nav>
                    </div>
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route exact path="/upload" component={Upoad} />
                        <Route exact path="/*" component={Anything} />
                    </Switch>
                </div>
            ) : <Redirect to="/login" />
        ) : <p>Loagding...</p>}
    </div>
);}
import React, {useEffect} from 'react';
import {Redirect, Switch, Route, Link} from 'react-router-dom';
import Dashboard from './Dashboard';
import Upoad from '../containers/Upload';
import WatchVideo from './WatchVideo';
import AddCateory from '../containers/AddCategory';
import Categories from '../containers/Categories';
import SubscriptionPlans from '../containers/SubscriptionPlans';
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
                                    <>
                                        <Link to="/upload">Upload Video</Link>
                                        <Link to="/categories">Categories</Link>
                                        <Link to="/subscriptionPlans">Create Plan</Link>
                                    </>
                                ) : null
                            }
                        </nav>
                    </div>
                    <Switch>
                        <Route exact path="/" component={ Dashboard } />
                        <Route exact path="/upload" component={ Upoad } />
                        <Route exact path="/watchVideo/:id" component={ WatchVideo } />
                        <Route exact path="/addCategory" component={ AddCateory } />
                        <Route exact path="/categories" component={ Categories } />
                        <Route exact path="/subscriptionPlans" component={ SubscriptionPlans } />
                        <Route exact path="/editCategory/:id" component={ AddCateory } />
                        <Route exact path="/*" component={ Anything } />
                    </Switch>
                </div>
            ) : <Redirect to="/login" />
        ) : <p>Loagding...</p>}
    </div>
);}
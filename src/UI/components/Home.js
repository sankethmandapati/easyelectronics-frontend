import React, {useEffect} from 'react';
import {Redirect, Switch, Route, Link} from 'react-router-dom';
import Dashboard from '../containers/Dashboard';
import Upoad from '../containers/Upload';
import StreamVideo from '../containers/StreamVideo';
import AddCateory from '../containers/AddCategory';
import Categories from '../containers/Categories';
import SubscriptionPlans from '../containers/SubscriptionPlans';
import CreateSubscription from '../containers/CreateSubscription';
import Subscriptions from '../containers/Subscriptions';
import AddPAymentOptions from '../containers/AddPaymentOptions';
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
                            <Link to="/createSubscription">Subscribe</Link>
                            <Link to="/subscriptions">My Subscriptions</Link>
                            {
                                props.userDetails.role === 'admin' ? (
                                    <>
                                        <Link to="/upload">Upload Video</Link>
                                        <Link to="/categories">Categories</Link>
                                        <Link to="/subscriptionPlans">Create Plan</Link>
                                        <Link to="/addPaymentOptions">Add Payment Option</Link>
                                    </>
                                ) : null
                            }
                        </nav>
                    </div>
                    <div className="home__main row">
                        <section className="home__main--container col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1">
                            <Switch>
                                <Route exact path="/" component={ Dashboard } />
                                <Route exact path="/upload" component={ Upoad } />
                                <Route exact path="/watchVideo/:id" component={ StreamVideo } />
                                <Route exact path="/addCategory" component={ AddCateory } />
                                <Route exact path="/categories" component={ Categories } />
                                <Route exact path="/subscriptionPlans" component={ SubscriptionPlans } />
                                <Route exact path="/createSubscription" component={ CreateSubscription } />
                                <Route exact path="/subscriptions" component={ Subscriptions } />
                                <Route exact path="/editCategory/:id" component={ AddCateory } />
                                <Route exact path="/addPaymentOptions" component={ AddPAymentOptions } />
                                <Route exact path="/*" component={ Anything } />
                            </Switch>
                        </section>
                    </div>
                </div>
            ) : <Redirect to="/login" />
        ) : <p>Loagding...</p>}
    </div>
);}
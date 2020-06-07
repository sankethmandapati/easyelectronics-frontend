import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import auth from './reducers/auth';
import categories from './reducers/categories';
import popovers, { defaultPopoverState } from './reducers/popovers';
import video from './reducers/video';
import subscriptionPlans from './reducers/subscriptionPlans';
import subscription from './reducers/subscription';
import paymentOptions from './reducers/paymentOptions';

export default () => {
    const reducer = combineReducers({
        auth,
        categories,
        popovers,
        subscriptionPlans,
        subscription,
        video,
        paymentOptions
    });
    const middlewares = [thunk];
    middlewares.push(createLogger);
    const initialState = {
        auth: {
            isAuthenticated: false,
            userVerificationDone: false,
            userDetails: {}
        },
        categories: {
            categories: [],
            category: {}
        },
        popovers: {
            ...defaultPopoverState
        },
        subscriptionPlans: {
            plans: [],
            plan: {}
        },
        subscription: {
            subscriptions: [],
            subscription: {}
        },
        video: {
            videoDetails: {},
            videos: []
        },
        paymentOptions: []
    };
    const store = createStore(reducer, initialState, applyMiddleware(...middlewares));
    return store;
};
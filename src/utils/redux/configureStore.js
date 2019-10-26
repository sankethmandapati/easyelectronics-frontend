import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import auth from './reducers/auth';
import categories from './reducers/categories';
import popovers from './reducers/popovers';
import subscriptionPlans from './reducers/subscriptionPlans';
import subscription from './reducers/subscription';

export default () => {
    const reducer = combineReducers({
        auth,
        categories,
        popovers,
        subscriptionPlans,
        subscription
    });
    const middlewares = [thunk];
    middlewares.push(createLogger);
    const initialState = {
        auth: {
            isAuthenticated: false,
            authenticationDone: false,
            userDetails: {}
        },
        categories: {
            categories: [],
            category: {}
        },
        popovers: {
            showLoader: false,
            showAlert: false,
            showPrompt: false,
            showCustomPopover: false,
            component: null,
            alertMessage: {
                messageType: '',
                message: '',
                buttons: []
            },
            message: ''
        },
        subscriptionPlans: {
            plans: [],
            plan: {}
        },
        subscription: {
            subscriptions: [],
            subscription: {}
        }
    };
    const store = createStore(reducer, initialState, applyMiddleware(...middlewares));
    return store;
};
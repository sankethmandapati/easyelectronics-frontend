import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import auth from './reducers/auth';
import categories from './reducers/categories';
import popovers from './reducers/popovers';
import subscriptionPlans from './reducers/subscriptionPlans';
import transactions from './reducers/transactions';

export default () => {
    const reducer = combineReducers({
        auth,
        categories,
        popovers,
        subscriptionPlans,
        transactions
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
        transactions: {
            transactions: [],
            transaction: {},
            categories: []
        }
    };
    const store = createStore(reducer, initialState, applyMiddleware(...middlewares));
    return store;
};
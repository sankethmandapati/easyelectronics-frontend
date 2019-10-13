import auth from './reducers/auth';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

export default () => {
    const reducer = combineReducers({
        auth
    });
    const middlewares = [thunk];
    middlewares.push(createLogger);
    const initialState = {
        auth: {
            isAuthenticated: false,
            authenticationDone: false,
            userDetails: {}
        }
    };
    const store = createStore(reducer, initialState, applyMiddleware(...middlewares));
    return store;
};
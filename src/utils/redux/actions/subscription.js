import api from '../../api';
import { openLoader, openModal, setShowModal } from './popovers';

export const create = (reqBody) => async (dispatch) => {
    try {
        dispatch(openLoader('Creating new category'));
        const {
            response, 
            success, 
            errorMessage
        } = await api.call('createSubscription', { reqBody });
        console.log("response, success, errorMessage: ", response, success, errorMessage);
        if(success) {
            dispatch({
                type: 'CREATE_TRANSACTION',
                response
            });
            return dispatch(openModal('small', 'Subscription request sent'));
        }
         return dispatch(openModal('small', errorMessage, 'error'));
    } catch(err) {
        return dispatch(openModal(
            'small',
            'Unexpected error occured while fetching information, please try again',
            'error'
        ));
    }
}

export const getAll = () => async (dispatch) => {
    try {
        dispatch(openLoader('Getting categories information...'));
        const {
            response, 
            success, 
            errorMessage
        } = await api.call('getAllSubscriptions');
        console.log("response, success, errorMessage: ", response, success, errorMessage);
        if(success) {
            dispatch({
                type: 'SET_ALL_SUBSCRIPTIONS',
                response
            });
            return setShowModal(false);
        }
        return dispatch(openModal('small', errorMessage, 'error'));
    } catch(err) {
        return dispatch(openModal(
            'small',
            'Unexpected error occured while fetching information, please try again',
            'error'
        ));
    }
}


export const getPendingRequests = () => async (dispatch) => {
    try {
        dispatch(openLoader('Fetching Data...'));
        const {
            response, 
            success, 
            errorMessage
        } = await api.call('getPendingRequests');
        if(success) {
            dispatch({
                type: 'PENDING_REQUESTS',
                response
            });
            return dispatch(setShowModal(false));
        }
        return dispatch(openModal('small', errorMessage, 'error'));
    } catch(err) {
        return dispatch(openModal(
            'small',
            'Unexpected error occured while fetching information, please try again',
            'error'
        ));
    }
}

export const approve = (id, reqBody) => async (dispatch) => {
    try {
        dispatch(openLoader('Approving request...'));
        const {
            response, 
            success, 
            errorMessage
        } = await api.call('approveSubscriptions', {params: {id}, reqBody});
        if(success) {
            dispatch({
                type: 'UPDATE_SUBSCRIPTION',
                id,
                response
            });
            return dispatch(openModal('small', 'Updated request status to Approved'));
        }
         return dispatch(openModal('small', errorMessage, 'error'));
    } catch(err) {
        return dispatch(openModal(
            'small',
            'Unexpected error occured while fetching information, please try again',
            'error'
        ));
    }
}

export const reject = (id, reqBody) => async (dispatch) => {
    try {
        dispatch(openLoader('Rejecting Request...'));
        const {
            response,
            success,
            errorMessage
        } = await api.call('rejectSubscriptions', {params: {id}, reqBody});
        if(success) {
            dispatch({
                type: 'UPDATE_SUBSCRIPTION',
                id,
                response
            });
            return dispatch(openModal('small', 'Updated request status to Rejected'));
        }
        return dispatch(openModal('small', errorMessage, 'error'));
    } catch(err) {
        return dispatch(openModal(
            'small',
            'Unexpected error occured while fetching information, please try again',
            'error'
        ));
    }
}
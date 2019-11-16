import api from '../../api';
import { openLoader, openModal, setShowModal } from './popovers';

export const create = (plan) => async (dispatch) => {
    try {
        dispatch(openLoader('Creating new category...'));
        const {
            response, 
            success, 
            errorMessage
        } = await api.call('createSubscriptionPlan', {reqBody: plan});
        dispatch(setShowModal(false));
        if(success) {
            dispatch({
                type: 'ADD_PLAN',
                response
            });
            return dispatch(openModal('small', 'Subscription plan created'));
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
        dispatch(openLoader('Gathering required information...'));
        const {
            response, 
            success, 
            errorMessage
        } = await api.call('getSubscriptionPlans');
        dispatch(setShowModal(false));
       if(success) 
            return dispatch({
                type: 'GET_ALL',
                response
            });
        return dispatch(openModal('small',errorMessage,'error'));
    } catch(err) {
        return dispatch(openModal(
            'small',
            'Unexpected error occured while fetching information, please try again',
            'error'
        ));
    }
}

export const getById = (id) => async (dispatch) => {
    try {
        dispatch(openLoader('Fetching subscription details...'));
        const {
            success,
            response,
            errorMessage
        } = await api.call('getSubscriptionPlanById', {params: { id }});
        if(success) {
            dispatch({
                type: 'SELECT_PLAN',
                response
            });
            return dispatch(setShowModal(false));
        }
        return dispatch(openModal('small', errorMessage, 'error'));
    } catch(err) {
        console.log("Error: ", err);
        return dispatch(openModal(
            'small',
            'Unexpected error occured while gathering required information, please try again',
            'error'
        ));
    }
}

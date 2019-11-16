import api from '../../api';
import { openLoader, openModal } from './popovers';

export const create = (reqBody) => async (dispatch) => {
    try {
        dispatch(openLoader('Creating new category...'));
        const {success, response, errorMessage} = await api.call('createPaymentOption', {reqBody});
        if(success) {
            dispatch({
                type: 'CREATE_PAYMENT_OPTION',
                response: response
            });
            return dispatch(openModal('small', 'Added payment option successfully'));
        }
        return dispatch(openModal('small', errorMessage, 'error'));
    } catch(err) {
        console.log("Error: ", err);
        return dispatch(openModal(
            'small', 
            'Unexpected error occured while creating a payment option, please try again', 
            'error'
        ));
    }
}
import api from '../../api';

export const create = (plan) => async (dispatch) => {
        try {
            dispatch({
                type: 'DISPLAY_LOADER',
                message: 'Creating new category'
            });
            const {
                response, 
                success, 
                errorMessage
            } = await api.call('createSubscriptionPlan', {reqBody: plan});
           if(success) 
                return dispatch({
                    type: 'ADD_PLAN',
                    response
                });
            return dispatch({
                type: 'DISPLAY_ALERT',
                message: errorMessage,
                messageType: 'error'
            });
        } catch(err) {
            return dispatch({
                type: 'DISPLAY_ALERT',
                message: 'Unexpected error occured while fetching information, please try again',
                messageType: 'error'
            });
    }
}
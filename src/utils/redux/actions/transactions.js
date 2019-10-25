import api from '../../api';

export const create = (form) => async (dispatch) => {
    try {
        dispatch({
            type: 'DISPLAY_LOADER',
            message: 'Creating new category'
        });
        const reqBody = {
            transactionId: form.transactionId.value,
            transactionDate: form.transactionDate.value,
            transactionMode: form.transactionMode.value
        };
        const {
            response, 
            success, 
            errorMessage
        } = await api.call('createTransaction', { reqBody });
        if(success) 
             return dispatch({
                 type: 'CREATE_TRANSACTION',
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

export const selectCategory = (categoryId) => ({
    type: 'TOGGLE_CATEGORIES_SELECTION',
    categoryId
});

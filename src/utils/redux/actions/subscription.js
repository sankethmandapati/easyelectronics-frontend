import api from '../../api';

export const create = (reqBody) => async (dispatch) => {
    try {
        dispatch({
            type: 'DISPLAY_LOADER',
            message: 'Creating new category'
        });
        const {
            response, 
            success, 
            errorMessage
        } = await api.call('createSubscription', { reqBody });
        console.log("response, success, errorMessage: ", response, success, errorMessage);
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

export const getAll = () => async (dispatch) => {
    try {
        dispatch({
            type: 'DISPLAY_LOADER',
            message: 'Creating new category'
        });
        const {
            response, 
            success, 
            errorMessage
        } = await api.call('getAllSubscriptions');
        console.log("response, success, errorMessage: ", response, success, errorMessage);
        if(success) 
             return dispatch({
                 type: 'SET_ALL_SUBSCRIPTIONS',
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

export const getPendingRequests = () => async (dispatch) => {
    try {
        dispatch({
            type: 'DISPLAY_LOADER',
            message: 'Creating new category'
        });
        const {
            response, 
            success, 
            errorMessage
        } = await api.call('getPendingRequests');
        if(success) 
             return dispatch({
                 type: 'PENDING_REQUESTS',
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

export const approve = (id, reqBody) => async (dispatch) => {
    try {
        dispatch({
            type: 'DISPLAY_LOADER',
            message: 'Creating new category'
        });
        const {
            response, 
            success, 
            errorMessage
        } = await api.call('approveSubscriptions', {params: {id}, reqBody});
        if(success) 
             return dispatch({
                 type: 'DISPLAY_ALERT',
                 message: response
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

export const reject = (id, reqBody) => async (dispatch) => {
    try {
        dispatch({
            type: 'DISPLAY_LOADER',
            message: 'Creating new category'
        });
        const {
            response, 
            success, 
            errorMessage
        } = await api.call('rejectSubscriptions', {params: {id}, reqBody});
        if(success) 
             return dispatch({
                type: 'DISPLAY_ALERT',
                message: response
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
import api from '../../api';

export const create = (e) => async (dispatch) => {
    try {
        dispatch({
            type: 'DISPLAY_LOADER',
            message: 'Creating new category'
        });
        e.preventDefault();
        const {
            name, 
            description, 
            premiumAmount, 
            validityInDays
        } = e.target;
        const reqBody = {
            name: name.value, 
            description: description.value, 
            premiumAmount: premiumAmount.value, 
            validityInDays: validityInDays.value
        };
        const response = await api.call('createCategory', {reqBody});
        if(response.success)
            return dispatch({
                type: 'CREATE_CATEGORY',
                response: response.response
            });
        return dispatch({
            type: 'DISPLAY_ALERT',
            message: response.errorMessage,
            messageType: 'error'
        });
    } catch(err) {
        return dispatch({
            type: 'DISPLAY_ALERT',
            message: 'Unexpected error occured while creating a category, please try again',
            messageType: 'error'
        });
    }
}

export const getAll = () => async (dispatch) => {
    try {
        dispatch({
            type: 'DISPLAY_LOADER',
            message: 'Fetching categories...'
        });
        const response = await api.call('getCategories');
        if(response.success)
            return dispatch({
                type: 'GET_CATEGORIES',
                response: response.response
            });
        return dispatch({
            type: 'DISPLAY_ALERT',
            message: response.errorMessage,
            messageType: 'error'
        });
    } catch(err) {
        return dispatch({
            type: 'DISPLAY_ALERT',
            message: 'Unexpected error occured while fetcing information, please try again',
            messageType: 'error'
        });
    }
}

export const getById = (id) => async (dispatch) => {
    try {
        dispatch({
            type: 'DISPLAY_LOADER',
            message: 'Fetching category information'
        });
        const response = await api.call('getCategoryById', {params: { id }});
        if(response.success)
            return dispatch({
                type: 'GET_CATEGORY',
                response: response.response
            });
        return dispatch({
            type: 'DISPLAY_ALERT',
            message: response.errorMessage,
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

export const updateCategory = (id, payload) => async (dispatch) => {
    try {
        dispatch({
            type: 'DISPLAY_LOADER',
            message: 'Updating category details'
        });
        const response = await api.call('updateCategory', {reqBody: payload, params: { id }});
        if(response.success)
            return dispatch({
                type: 'UPDATE_CATEGORY',
                response: response.response
            });
        return dispatch({
            type: 'DISPLAY_ALERT',
            message: response.errorMessage,
            messageType: 'error'
        });
    } catch(err) {
        return dispatch({
            type: 'DISPLAY_ALERT',
            message: 'Unexpected error occured while updating category, please try again',
            messageType: 'error'
        });
    }
}

export const remove = (id) => async (dispatch) => {
    try {
        dispatch({
            type: 'DISPLAY_LOADER',
            message: 'Deleting category'
        });
        const response = await api.call('removeCategory', {params: { id }});
        if(response.success)
            return dispatch({
                type: 'REMOVE_CATEGORY',
                response: response.response
            });
        return dispatch({
            type: 'DISPLAY_ALERT',
            message: response.errorMessage,
            messageType: 'error'
        });
    } catch(err) {
        return dispatch({
            type: 'DISPLAY_ALERT',
            message: 'Unexpected error occured while deeting category, please try again',
            messageType: 'error'
        });
    }
}

export const updateCategoryObj = (e) => {
    const {name, value} = e.target;
    console.log("name, value: ", name, value);
    return {
        type: 'UPDATE_CATEGORY_OBJ',
        data: {
            [name]: value
        }
    };
}
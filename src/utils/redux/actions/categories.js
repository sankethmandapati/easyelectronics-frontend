import api from '../../api';
import { openModal, openLoader, setShowModal } from './popovers';

export const create = (e) => async (dispatch) => {
    try {
        dispatch(openLoader('Creating new category'));
        e.preventDefault();
        const {
            name, 
            description, 
            complementary
        } = e.target;
        const reqBody = {
            name: name.value, 
            description: description.value, 
            complementary: complementary.checked
        };
        // console.log("reqBody: ", reqBody);
        const {
            success,
            response,
            errorMessage
        } = await api.call('createCategory', {reqBody});
        if(success) {
            dispatch({
                type: 'CREATE_CATEGORY',
                response: response
            });
            return dispatch(openModal(
                'small',
                'Category created successfully!',
                'success'
            ));
        }
        return dispatch(openModal('small', errorMessage, 'error'));
    } catch(err) {
        return dispatch(openModal(
            'small',
            'Unexpected error occured while creating a category, please try again',
            'error'
        ));
    }
}

export const getAll = () => async (dispatch) => {
    try {
        dispatch(openLoader('Fetching categories...'));
        const {
            success,
            response,
            errorMessage
        } = await api.call('getCategories');
        if(success) {
            dispatch(setShowModal(false));
            return dispatch({
                type: 'GET_CATEGORIES',
                response
            });
        }
        return dispatch(openModal('small', errorMessage, 'error'));
    } catch(err) {
        return dispatch(openModal(
            'small',
            'Unexpected error occured while fetcing information, please try again',
            'error',
        ));
    }
}

export const getById = (id) => async (dispatch) => {
    try {
        dispatch(openLoader('Fetching category information'));
        const {
            success,
            response,
            errorMessage
        } = await api.call('getCategoryById', {params: { id }});
        if(success) {
            dispatch({
                type: 'GET_CATEGORY',
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

export const updateCategory = (id, payload) => async (dispatch) => {
    try {
        dispatch(openLoader('Updating category details'));
        dispatch({
            type: 'DISPLAY_LOADER',
            message: 'Updating category details'
        });
        const {
            success,
            response,
            errorMessage
        } = await api.call('updateCategory', {reqBody: payload, params: { id }});
        if(success) {
            dispatch(setShowModal(false));
            return dispatch({
                type: 'UPDATE_CATEGORY',
                response: response
            });
        }
        return dispatch(openModal('small', errorMessage, 'error'));
    } catch(err) {
        return dispatch(openModal(
            'small',
            'Unexpected error occured while updating category, please try again',
            'error'
        ));
    }
}

export const remove = (id) => async (dispatch) => {
    try {
        dispatch(openLoader('Deleting category'));
        const {
            success,
            response,
            errorMessage
        } = await api.call('removeCategory', {params: { id }});
        if(success) {
            dispatch(setShowModal(false));
            return dispatch({
                type: 'REMOVE_CATEGORY',
                id
            });
        }
        return dispatch(openModal(
            'small',
            errorMessage,
            'error'
        ));
    } catch(err) {
        return dispatch(openModal(
            'small',
            'Unexpected error occured while deeting category, please try again',
            'error'
        ));
    }
}

export const updateCategoryObj = (e) => {
    const {name, value} = e.target;
    return {
        type: 'UPDATE_CATEGORY_OBJ',
        data: {
            [name]: value
        }
    };
}
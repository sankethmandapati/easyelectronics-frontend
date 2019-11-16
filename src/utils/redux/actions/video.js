import api from '../../api';
import { setShowModal, openLoader, openModal } from './popovers';

export const getAllVideos = () => async (dispatch) => {
    try {
        dispatch(openLoader('Loading content...'));
        const {
            success,
            response,
            errorMessage
        } = await api.call('getAllVideos');
        if(success) {
            dispatch({
                type: 'GET_ALL_VIDEOS',
                response
            });
            return dispatch(setShowModal(false));
        }
        return dispatch('small', errorMessage, 'error');
    } catch(err) {
        console.log("Error: ", err);
        dispatch(openModal(
            'small', 
            'There was some problem in loading the content, please try again', 
            'error'
        ));
    }
}

export const getVideoDetails = (id) => async (dispatch) => {
    try {
        dispatch(openLoader('Loading video...'));
        const {
            response,
            success,
            errorMessage
        } = await api.call('getVideoById', {
            params: {id}
        });
        dispatch(setShowModal(false));
        if(success) {
            return dispatch({
                type: 'VIDEO_DETAILS',
                response
            });
        }
        return dispatch(openModal(
            'small',
            errorMessage,
            'error'
        ));
    } catch(err) {
        console.log("Error: ", err);
        return dispatch(openModal(
            'small',
            'Error in fetching video detils',
            'error'
        ));
    }
}

export const toggleVideoDescription = () => ({
    type: 'TOGGLE_DESCRIPTION'
});
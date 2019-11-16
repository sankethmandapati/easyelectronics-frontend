import api from "../../api";

export const register = (e) => async (dispatch) => {
    try {
        e.preventDefault();
        dispatch({
            type: 'DISPLAY_LOADER',
            message: 'Creating new category'
        });
        const email = e.target.email.value;
        const phoneNum = e.target.phoneNum.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const reqBody = {email, password, name, phoneNum};
        const {response, success, errorMessage} = await api.call('register', {reqBody});
        alert("Registered successfully!\nA verification email has been send to your registered mail address, please check");
        if(success) {
            return dispatch({
                type: "REGISTER_SUCCESS",
                response
            });
        } else {
            return dispatch({
                type: "LOGIN_REGISTER_FAILURE",
                errorMessage
            });
        }
    } catch(err) {
        console.log("Erorr: ", err);
        return dispatch({
            type: "LOGIN_REGISTER_FAILURE",
            errorMessage: "Error in Registering, please try again"
        });
    }
}

export const login = (e) => async (dispatch) => {
    try {
        e.preventDefault();
        dispatch({
            type: "LOGIN_REGISTER_REQUEST"
        });
        const email = e.target.email.value;
        const password = e.target.password.value;
        const {response, success, errorMessage} = await api.login(email, password);
        if(success) {
            return dispatch({
                type: "LOGIN_SUCCESS",
                response
            });
        } else {
            return dispatch({
                type: "LOGIN_REGISTER_FAILURE",
                errorMessage
            });
        }
    } catch(err) {
        console.log("Erorr: ", err);
        return dispatch({
            type: "LOGIN_REGISTER_FAILURE",
            errorMessage: "Error in logging in, please try again"
        });
    }
}

export const authenticate = () => async (dispatch) => {
    try {
        const {success, response, errorMessage} = await api.call('authenticate');
        if(success) {
            return dispatch({
                type: "AUTHENTICATION_SUCCESS",
                response
            });
        } else {
            return dispatch({
                type: "AUTHENTICATION_FAILURE",
                errorMessage
            });
        }
    } catch(err) {
        console.log("Error while trying to authenticate!!: ", err);
        return dispatch({
            type: 'AUTHENTICATION_FAILURE',
            errorMessage: 'Unexpected Error occured while trying to authenticate user, please login again'
        });
    }
}

export const logout = () => async (dispatch) => {
    try {
        api.logout();
        dispatch({
            type: "LOGOUT"
        });
    } catch(err) {
        console.log("error in logging out");
    }
}
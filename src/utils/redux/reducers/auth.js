export default (state = {}, action) => {
    switch(action.type) {
        case "LOGIN_REGISTER_REQUEST":
            return {
                ...state,
                isLoading: true,
                isAuthenticated: false
            };
        case "LOGIN_SUCCESS":
        case "AUTHENTICATION_SUCCESS":
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                userDetails: action.response,
                userVerificationDone: true
            };
        case "REGISTER_SUCCESS":
            return {
                ...state,
                isLoading: false
            };
        case "LOGIN_REGISTER_FAILURE":
        case "AUTHENTICATION_FAILURE":
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
                errorMessage: action.errorMessage,
                userVerificationDone: true
            };
        case "LOGOUT":
            return {
                ...state,
                isAuthenticated: false,
                userDetails: {}
            };
        default:
            return state;
    }
}
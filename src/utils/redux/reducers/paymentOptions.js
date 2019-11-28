export default (state = [], action) => {
    console.log("action: ", action);
    switch(action.type) {
        case 'GET_ALL_PAYMENT_OPTIONS':
            return [
                ...action.response
            ];
        case 'CREATE_PAYMENT_OPTION':
            return [
                ...state,
                action.response
            ];
        default: 
            return [
                ...state
            ];
    }
}

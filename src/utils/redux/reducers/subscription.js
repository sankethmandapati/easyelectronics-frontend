export default (state = {}, action) => {
    switch(action.type) {
        case 'SET_ALL_SUBSCRIPTIONS':
            return {
                ...state,
                subscriptions: [
                    ...action.response
                ]
            };
        case 'PENDING_REQUESTS':
            return {
                ...state,
                pendingRequests: [
                    ...action.response
                ]
            };
        case 'CREATE_SUBSCRIPTIONS':
            return {
                ...state,
                subscriptions: [
                    ...state.subscriptions,
                    {...action.response}
                ]
            };
        case 'SET_SUBSCRIPTION':
            return {
                ...state,
                subscription: action.response
            };
        default:
            return {...state};
    }
}
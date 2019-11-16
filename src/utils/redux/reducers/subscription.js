const updateSubscription = (
    subscriptions = [], 
    id, 
    patch = {}
) => subscriptions.map(s => {
    if(s._id === id)
        return {
            ...s,
            ...patch
        };
    return { ...s };
});

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
        case 'UPDATE_SUBSCRIPTION':
            return {
                ...state,
                subscriptions: updateSubscription(
                    state.subscriptions,
                    action.id,
                    action.response
                )
            }
        case 'SET_SUBSCRIPTION':
            return {
                ...state,
                subscription: action.response
            };
        default:
            return {...state};
    }
}
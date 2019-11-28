export default (state, action) => {
    switch(action.type) {
        case 'GET_ALL':
            return {
                ...state,
                plans: [
                    ...action.response
                ]
            };
        case 'ADD_PLAN':
            return {
                ...state,
                plans: [
                    ...state.plans,
                    action.response
                ]
            };
        case 'REMOVE_PLAN':
            return {
                ...state,
                plans: state.plans.filter(p => p.id === action.planId)
            };
        case 'EDIT_PLAN':
            return {
                ...state,
                plan: state.plans.map(p => {
                    if(p.id === action.plan._id)
                        return action.plan;
                    else
                        return p;
                })
            };
        case 'SELECT_PLAN':
            return {
                ...state,
                plan: action.response,
                showModal: action.showModal || false
            };
        case 'UPDATE_SUBSCRIPTION_MODAL_VISIBILITY':
            return {
                ...state,
                showModal: action.showModal
            }
        default:
            return { ...state };
    }
}
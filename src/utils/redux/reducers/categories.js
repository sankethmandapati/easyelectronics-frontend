export default (state = {}, action) => {
    switch(action.type) {
        case 'CREATE_CATEGORY':
            return {
                ...state,
                categories: [
                    ...state.categories,
                    action.response
                ]
            };
        case 'GET_CATEGORIES':
            return {
                ...state,
                categories: [
                    ...action.response
                ]
            };
        case 'GET_CATEGORY':
            return {
                ...state,
                category: {
                    ...action.response
                }
            };
        case 'UPDATE_CATEGORY':
            return {
                ...state,
                categories: state.categories.map(c => {
                    return (c._id === action.response._id) ? action.response : c
                })
            };
        case 'REMOVE_CATEGORY':
            return {
                ...state,
                categories: state.categories.filter(c => c._id !== action.response._id)
            };
        case 'UPDATE_CATEGORY_OBJ':
            return {
                ...state,
                category: {
                    ...state.category,
                    ...action.data
                }
            }
        default:
            return { ...state };
    }
}
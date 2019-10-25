const toggleCategoriesSelection = (selectedCategories, category) => {
    const categories = [...selectedCategories];
    const index = categories.indexOf(category);
    if(index === -1) 
        categories.push(category);
    else
        categories.splice(index);
    return categories;
}

export default (state = {}, action) => {
    switch(action.type) {
        case 'SET_ALL_TRANSACTIONS':
            return {
                ...state,
                transactions: [
                    ...action.response
                ]
            };
        case 'CREATE_TRANSACTION':
            return {
                ...state,
                transactions: [
                    ...state.transactions,
                    {...action.response}
                ]
            };
        case 'SET_TRANSACTION':
            return {
                ...state,
                transaction: action.response
            };
        case 'TOGGLE_CATEGORIES_SELECTION':
            return {
                ...state,
                categories: toggleCategoriesSelection(state.categories, action.categoryId)
            };
        default:
            return {...state};
    }
}
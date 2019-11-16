const defaultPopoverState = {
    headerTitle: '',
    footerOptions: [],
    message: '',
    customComponent: null,
    size: 'default',
    type: 'default',
    onModalClose: () => {},
    showModal: false,
    popOverType: 'modal',
    progress: 0
};

export default (state = {}, action) => {
    switch(action.type) {
        case 'DISPLAY_LOADER':
            return {
                ...state,
                ...defaultPopoverState,
                showModal: true,
                message: action.message,
                popOverType: 'spinner'
            };
        case 'DISPLAY_ALERT':
            console.log("Show a modal: ", action);
            return {
                ...state,
                ...defaultPopoverState,
                headerTitle: action.headerTitle,
                footerOptions: action.footerOptions,
                message: action.message,
                size: action.size,
                type: action.alertType,
                onModalClose: action.onModalClose,
                showModal: true,
                popOverType: 'modal'
            };
        case 'DISPLAY_CUSTOM_POPOVER':
            return {
                ...state,
                ...defaultPopoverState,
                headerTitle: action.headerTitle,
                footerOptions: action.footerOptions,
                customComponent: action.customComponent,
                size: action.size,
                type: action.alertType,
                onModalClose: action.onModalClose,
                showModal: true,
                popOverType: 'modal'
            };
        case 'DISPLAY_PROGRESS_BAR':
            return {
                ...state,
                ...defaultPopoverState,
                popOverType: 'progressbar',
                progress: 0,
                showModal: true
            };
        case 'UPDATE_PROGRESS_UPDATE':
            return {
                ...state,
                showModal: action.showModal,
                progress: action.progress
            };
        case 'SET_MODAL_VISIBILITY':
            return {
                ...state,
                showModal: action.showModal
            };
        default:
            return {
                ...state
            };
    }
}

export { defaultPopoverState };
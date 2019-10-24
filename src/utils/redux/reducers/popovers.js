export default (state = {}, action) => {
    switch(action.type) {
        case 'DISPLAY_LOADER':
            return {
                ...state,
                showLoader: true,
                showAlert: false,
                showPrompt: false,
                showCustomPopover: false,
                component: null,
                message: action.message
            };
        case 'DISPLAY_ALERT':
            return {
                ...state,
                showLoader: false,
                showAlert: true,
                showPrompt: false,
                showCustomPopover: false,
                component: null,
                alertMessage: {
                    messageType: action.messageType,
                    message: action.message,
                    buttons: action.buttons
                }
            };
        case 'DISPLAY_CUSTOM_POPOVER':
            return {
                ...state,
                showLoader: false,
                showAlert: false,
                showPrompt: false,
                showCustomPopover: true,
                component: action.component
            };
        default:
            return {
                ...state
            };
    }
}
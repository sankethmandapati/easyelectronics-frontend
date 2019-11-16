export const openModal = (size, message, alertType, headerTitle) => ({
    type: 'DISPLAY_ALERT',
    size, 
    message, 
    alertType,
    headerTitle
});

export const openLoader = (message) => ({
    type: 'DISPLAY_LOADER',
    message
});

export const openCustomPopover = (payload) => ({
    type: 'DISPLAY_CUSTOM_POPOVER',
    ...payload
});

export const openProgressBar = () => ({
    type: 'DISPLAY_PROGRESS_BAR'
});

export const updateProgress = (progress) => ({
    type: 'UPDATE_PROGRESS_UPDATE',
    progress
});

export const setShowModal = (showModal) => ({
    type: 'SET_MODAL_VISIBILITY',
    showModal
});
export default (state, action) => {
    switch(action.type) {
        case 'VIDEO_DETAILS':
            return {
                ...state,
                videoDetails: {
                    ...action.response
                }
            };
        case 'GET_ALL_VIDEOS':
            return {
                ...state,
                videos: [
                    ...action.response
                ]
            };
        case 'TOGGLE_DESCRIPTION':
            return {
                ...state,
                showDescription: !state.showDescription
            };
        default:
            return {
                ...state
            };
    }
}
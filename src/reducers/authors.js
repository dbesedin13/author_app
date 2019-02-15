const initialState = {
    isReady: false,
    items: null,
    startPagination: 0,
    endPagination: 10
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_AUTHORS':
            return {
                ...state,
                items: action.payload,
                isReady: true,
            }
        case 'SET_NEXT_PAGE':
            return {
                ...state,
                startPagination: state.startPagination + 10,
                endPagination: state.endPagination + 10
            }
        case 'SET_PREV_PAGE':
            return {
                ...state,
                startPagination: state.startPagination - 10,
                endPagination: state.endPagination - 10
            }
        default:
            return state;
    }
}

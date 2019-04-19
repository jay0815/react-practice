const initialState = {
    reason: 'no reason',
    nameList: []
};

const thirdState = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_REASON':
            return {
                ...state,
                reason: Object(action).hasOwnProperty('meta') ? action.meta : state.reason
            }
        default:
            return state
    }
}

export default thirdState;
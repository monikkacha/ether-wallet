const initialState = {
    count: 1,
    account: {},
};

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case "updateAccount":
            return { ...state, account: action.payload };
        default:
            return state;
    }
}

export default accountReducer;
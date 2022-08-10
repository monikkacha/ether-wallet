const initialState = {
    count: 1,
    account: {},
    provider: {},
};

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case "updateAccount":
            return { ...state, account: action.payload };
        case "updateProvider":
            return { ...state, provider: action.payload };
        default:
            return state;
    }
}

export default accountReducer;
const initialState = {
    count: 1,
    account: {},
    provider: {},
    history: [],
};

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case "updateAccount":
            return { ...state, account: action.payload };
        case "updateProvider":
            return { ...state, provider: action.payload };
        case "updateHistory":
            return { ...state, history: action.payload };
        default:
            return state;
    }
}

export default accountReducer;
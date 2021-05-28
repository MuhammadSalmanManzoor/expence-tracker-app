const TransactionReducer = ((state, action) => {
    switch (action.type) {
        case "ADD_transaction": {
            return [action.payload, ...state]
        }
        default:
            return state;
    }
})
export default TransactionReducer;

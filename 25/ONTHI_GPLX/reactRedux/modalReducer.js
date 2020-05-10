export default function modalReducer (state = {isVisiable: false}, action) {
    switch (action.type) {
        case "OPEN_MODAL":
            return {
                ...state,
                isVisiable: true
            }
        case "CLOSE_MODAL":
            return {
                ...state,
                isVisiable: false
            }
        default:
            return state;
    }
}


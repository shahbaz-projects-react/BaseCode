import { OPEN_DRAWER } from "./actions"

const INITIAL_STATE = {
    open: false,
}

const HeaderReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case OPEN_DRAWER.toString(): {
            const open = action.payload
            return { ...state, open }
        }
        default:
            return state
    }
}

export default HeaderReducer

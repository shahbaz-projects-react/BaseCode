import { combineReducers } from "redux"
import HeaderReducer from "../Components/Header/reducer"
const rootReducer = combineReducers({ header: HeaderReducer })

export default rootReducer

import { combine } from "redux";

import entitiesReducer from "./entities_reducer";
import sessionReducer from "./session_reducer";
import {} from "./errors_reducer"

const RootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer
})

export default RootReducer;
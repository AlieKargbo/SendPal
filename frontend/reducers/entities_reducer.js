import { combineReducers } from 'redux';
import usersReducer from "./users_reducer"
import paymentsReducer from "./payments_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    payments: paymentsReducer
});

export default entitiesReducer;
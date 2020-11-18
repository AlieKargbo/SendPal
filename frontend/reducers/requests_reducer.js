import { RECEIVE_ALL_REQUESTS, RECEIVE_REQUEST } from "../actions/request_actions";

const requestsReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    
    switch (action.type) {
        case RECEIVE_ALL_REQUESTS:
            return action.requests;
        case RECEIVE_REQUEST:
            // nextState[action.payload.id] = action.payload.amount;
            nextState = action.payload.request;
            return nextState;
        default:
            return oldState;
    }
}

export default requestsReducer;
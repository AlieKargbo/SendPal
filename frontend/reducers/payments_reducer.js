import { RECEIVE_ALL_PAYMENTS, RECEIVE_PAYMENT } from "../actions/payment_actions";

const paymentsReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_PAYMENTS:
            return action.payments;
        case RECEIVE_PAYMENT:
            nextState[action.payment.id] = action.payment
            return nextState;
        default:
            return oldState;
    }
}

export default paymentsReducer;
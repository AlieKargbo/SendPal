import * as PaymentApiUtil from "../util/payment_api_util";

export const RECEIVE_ALL_PAYMENTS = 'RECEIVE_ALL_PAYMENTS';
export const RECEIVE_PAYMENT = 'RECEIVE_PAYMENT';

const receiveAllPayments = (payments) => {
    return({
        type: RECEIVE_ALL_PAYMENTS,
        payments
    })
};

const receivePayment = (payload) => {
    return ({
        type: RECEIVE_PAYMENT,
        payload
    })
};

export const fetchAllPayments = () => {
    debugger
    return (dispatch) => {
        return PaymentApiUtil.fetchAllPayments().then((payload) => {
            dispatch(receiveAllPayments(payload))
        })
        .catch(err => console.log(err))
    }
};

export const fetchPayment = (paymentId) => {
    debugger
    return (dispatch) => {
        return PaymentApiUtil.fetchPayment(paymentId).then((payment) => {
            dispatch(receivePayment(payment))
        })
        .catch(err => console.log(err))
    }
};

export const createPayment = (paymentId) => {
    // debugger
    return (dispatch) => {
        return PaymentApiUtil.createPayment(paymentId).then((payload) => {
            dispatch(receivePayment(payload))
        })
        .catch(err => console.log(err))
        // .fail((resp) => console.log(resp))
    }
};

// export const updateUser = (userId) => {
//     debugger
//     return (dispatch) => {
//         return UserApiUtil.updateUser(userId).then((user) => {
//             dispatch(receiveUpdatedUser(user))
//         })
//     }
// }
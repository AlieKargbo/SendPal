import * as PaymentApiUtil from "../util/payment_api_util";

export const RECEIVE_ALL_PAYMENTS = 'RECEIVE_ALL_PAYMENTS';
export const RECEIVE_PAYMENT = 'RECEIVE_PAYMENT';

const receiveAllPayments = (payments) => {
    return({
        type: RECEIVE_ALL_PAYMENTS,
        payments
    })
};

const receivePayment = (payment) => {
    return ({
        type: RECEIVE_PAYMENT,
        payment
    })
};

export const fetchAllPayments = () => {
    return (dispatch) => {
        return PaymentApiUtil.fetchAllPayments().then((payload) => {
            dispatch(receiveAllPayments(payload))
        })
    }
};

export const fetchPayment = (paymentId) => {
    return (dispatch) => {
        return PaymentApiUtil.fetchPayment(paymentId).then((payment) => {
            dispatch(receivePayment(payment))
        })
    }
};

export const createPayment = (paymentId) => {
    // debugger
    return (dispatch) => {
        return PaymentApiUtil.createPayment(paymentId).then((payment) => {
            dispatch(receivePayment(payment))
        }).fail((resp) => console.log(resp))
    }
};

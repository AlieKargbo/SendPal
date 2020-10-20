export const fetchAllPayments = () => {
    return $.ajax({
        url: `/api/payments`,
        method: `GET`
    });
};

export const fetchPayment = (paymentId) => {
    return $.ajax({
        url: `/api/payments/${paymentId}`,
        method: 'GET'
    })
};

export const createPayment = (payment) => {
    return $.ajax({
        url: `/api/payments/`,
        method: `POST`,
        data: { payment }
    })
}
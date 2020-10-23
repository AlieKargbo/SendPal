
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
    // debugger
    return $.ajax({
        url: `/api/payments/`,
        method: `POST`,
        data: { payment }
    })
}

// export const updateUser = (user) => {
//     debugger
//     return $.ajax({
//         url: `/api/users/${user.id}`,
//         method: 'PATCH',
//         data: { user } 
//     })
// };
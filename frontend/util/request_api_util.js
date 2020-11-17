export const fetchAllRequests = (id) => {
    // debugger
    return $.ajax({
        url: `/api/requests`,
        method: `GET`,
        data: { id }
    })
}

export const fetchRequest = (requestId) => {
    return $.ajax({
        url: `/api/requests/${requestId}`,
        method: `GET`
    })
}

export const createRequest = (request) => {
    // debugger
    return $.ajax({
        url: `/api/requests`,
        method: `POST`,
        data: { request }
    })
}

// export const deleteRequest = (requestId) => {
//     return $.ajax({
//         url: `/api/requests/${requestId}`,
//         method: `DELETE`,
//     })
// }


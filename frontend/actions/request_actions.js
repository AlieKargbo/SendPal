import * as RequestApiUtil from "../util/request_api_util";

export const RECEIVE_ALL_REQUESTS = "RECEIVE_ALL_REQUESTS";
export const RECEIVE_REQUEST = "RECEIVE_REQUEST";

const receiveAllRequests = (requests) => {
    return ({
        type: RECEIVE_ALL_REQUESTS,
        requests
    });
};

const receiveRequest = (payload) => {
    return ({
        type: RECEIVE_REQUEST,
        payload
    });
};

export const fetchAllRequests = () => {
    return (dispatch) => {
        return RequestApiUtil.fetchAllRequests().then((payload) => {
            dispatch(receiveAllRequests(payload))
        });
    };
};

export const fetchRequest = () => {
    return (dispatch) => {
        return RequestApiUtil.fetchRequest(requestId).then((request) => {
            dispatch(receiveRequest(request))
        });
    };
};

export const createRequest = (requestId) => {
    // debugger
    return (dispatch) => {
        return RequestApiUtil.createRequest(requestId).then((payload) => {
            dispatch(receiveRequest(payload))
        }).fail((resp) => console.log(resp));
    };
};


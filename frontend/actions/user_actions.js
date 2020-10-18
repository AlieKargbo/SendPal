import * as UserAPiUtil from "../util/user_util";

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

const receiveAllUsers = (users) => ({
    type: RECEIVE_ALL_USERS,
    users
});

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
});

export const fetchAllUsers = () => (dispatch) => {
    return UserAPiUtil.fetchAllUsers().then((payload) => {
        dispatch(receiveAllUsers(payload))
    })
}

export const fetchUser = (userId) => (dispatch) => {
    return UserAPiUtil.fetchUser(userId).then((user) => {
        dispatch(receiveUser(user));
    });
} ;
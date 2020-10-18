import * as UserAPiUtil from "../util/user_util";

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

const receiveAllUsers = () => {
    type: RECEIVE_ALL_USERS,
    users
};

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
});

export const fetchAllUsers = () => (dispatch) => {
    return UserAPiUtil.fetchAllUsers().then((payload) => {
        dispatch(receiveAllUsers(payload))
    })
}

export const fetchUser = (user) => {
    return UserAPiUtil.fetchUser(user).then((payload) => {
        dispatch(receiveUser(user));
    });
} ;
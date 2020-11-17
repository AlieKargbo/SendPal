const { $CombinedState } = require("redux")

export const fetchAllUsers = () => {
    // debugger
    return $.ajax ({
        url: `/api/users`,
        method: `GET`
    });
};

export const fetchUser = (userId) => {
    return $.ajax ({
        url: `/api/users/${userId}`,
        method: `GET`
    });
};

export const updateUser = (user) => {
    // debugger
    return $.ajax({
        url: `/api/users/${user.id}`,
        method: 'PATCH',
        data: { user } 
    })
};
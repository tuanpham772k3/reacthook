//Begin
export const getUserStart = () => ({
    type: "GET_USER_START",
});
export const getUserSuccess = (users) => ({
    type: "GET_USER_SUCCESS",
    payload: users,
});
export const getUserFailed = () => ({
    type: "GET_USER_FAILED",
});

// CREATE
export const createUserStart = () => ({
    type: "CREATE_USER_START",
});
export const createUserSuccess = (list) => ({
    type: "CREATE_USER_SUCCESS",
    payload: list,
});
export const createUserFailed = () => ({
    type: "CREATE_USER_FAILED",
});


//Update
export const updateUserStart = () => ({
    type: "UPDATE_USER_START",
});
export const updateUserSuccess = (user) => ({
    type: "UPDATE_USER_SUCCESS",
    payload: user,
});
export const updateUserFailed = () => ({
    type: "UPDATE_USER_FAILED",
});

// Delete
export const deleteUserStart = () => ({
    type: "DELETE_USER_START",
});
export const deleteUserSuccess = (userId) => ({
    type: "DELETE_USER_SUCCESS",
    payload: userId,
});
export const deleteUserFailed = () => ({
    type: "DELETE_USER_FAILED",
});
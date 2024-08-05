import axios from "axios";
import {
    createUserFailed, createUserStart, createUserSuccess, deleteUserFailed,
    deleteUserStart, deleteUserSuccess, getUserFailed, getUserStart,
    getUserSuccess, updateUserFailed, updateUserStart, updateUserSuccess
} from "./UserAction"

export const getAllUser = async (dispatch) => {
    // setTimeout(() => {
    dispatch(getUserStart());
    // }, 5000);
    try {
        const res = await axios.get(`https://reqres.in/api/users?page=2`)
        console.log("res", res);
        // const { users, totalPages } = res.data;
        // if (Array.isArray(users)) {
        dispatch(getUserSuccess(res.data.data));
        // } else {
        //     console.error("Expected users to be an array but got:", users);
        //     dispatch(getUserFailed());
        // }
    } catch (error) {
        console.log("Error fetching user: ", error);
        dispatch(getUserFailed());
    };
};
export const createUser = async (list, dispatch) => {
    dispatch(createUserStart());
    try {
        const res = await axios.post(`https://reqres.in/api/users`)
        console.log("res", res);
        dispatch(createUserSuccess(list));
    } catch (error) {
        console.log("Error fetching user: ", error);
        dispatch(createUserFailed());
    }
}

export const updateUser = async (user, dispatch) => {
    dispatch(updateUserStart());
    try {
        const res = await axios.put(`https://reqres.in/api/users/${user.id}`, user);
        console.log("res", res);
        dispatch(updateUserSuccess(user));
    } catch (error) {
        console.log("Error updating user: ", error);
        dispatch(updateUserFailed(error));
    }
};

export const deleteUser = async (user, dispatch) => {
    dispatch(deleteUserStart());
    try {
        const res = await axios.delete(`https://reqres.in/api/users/${user.id}`);
        console.log("res", res);
        dispatch(deleteUserSuccess(user.id));
    } catch (error) {
        console.log("Error updating user: ", error);
        dispatch(deleteUserFailed(error));
    }
};
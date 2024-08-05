export const reducerUser = (state, action) => {
    switch (action.type) {
        // Begin
        case "GET_USER_START":
            return {
                ...state,
                isLoading: true,
                users: [],
                isError: false,
            };
        case "GET_USER_SUCCESS":
            return {
                isLoading: false,
                users: action.payload,
                isError: false,
            };
        case "GET_USER_FAILED":
            return {
                isLoading: false,
                users: [],
                isError: true,
            };

        // CREATE
        case "CREATE_USER_START":
            return {
                isLoading: true,
                ...state,
                isError: false,
            };
        case "CREATE_USER_SUCCESS":
            return {
                isLoading: false,
                users: [...state.users, action.payload],
                isError: false,
            };
        case "CREATE_USER_FAILED":
            return {
                isLoading: false,
                users: [],
                isError: true,
            };

        // UPDATE
        case "UPDATE_USER_START":
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case "UPDATE_USER_SUCCESS":
            return {
                isLoading: false,
                users: state.users.map(user =>
                    user.id === action.payload.id ? action.payload : user
                ),
                isError: false,
            };
        case "UPDATE_USER_FAILED":
            return {
                isLoading: false,
                isError: true,
            };

        // DELETE
        case "DELETE_USER_START":
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case "DELETE_USER_SUCCESS":
            return {
                isLoading: false,
                users: state.users.filter(user => user.id !== action.payload),
                isError: false,
            };
        case "DELETE_USER_FAILED":
            return {
                isLoading: false,
                isError: true,
            };

        default:
            return state
    }
}
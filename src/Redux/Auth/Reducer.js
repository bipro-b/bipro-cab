import {
    GET_USER_FAILURE,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    LOGOUT,
} from "./ActionTypes";

const initialState ={
    user: null,
    isLoading: false,
    error: null
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
            return {...state, isLoading: true, error: null};
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {...state, isLoading: false};
        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case GET_USER_FAILURE:
            return {...state, isLoading: false, error: action.payload};
        case GET_USER_SUCCESS:
            return {...state, isLoading: false, user: action.payload}; // Update user state here
        case LOGOUT:
            localStorage.removeItem("access_token");
            return {...state, isLoading: false, user: null, error: null}; // Clear user state on logout
        default:
            return state;
    }
}

export default authReducer;

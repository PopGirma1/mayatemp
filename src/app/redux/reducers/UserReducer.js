import {
    ADD_USERS,
    GET_USERS,
    GET_SINGLE_USER,
    UPDATE_USER,
    DELETE_USER,
} from '../actions/UserActions'

const initialState = {
    userList: [],
}

const UserReducer = function (state = initialState, action) {
    switch (action.type) {
        case ADD_USERS: {
            return {
                ...state,
                userList: [...action.payload],
            }
        }
        case GET_USERS: {
            return {
                ...state,
                userList: [...action.payload],
            }
        }
        case GET_SINGLE_USER: {
            return {
                ...state,
                userList: [action.payload],
            }
        }
        case UPDATE_USER: {
            return {
                ...state,
                userList: [...action.payload],
            }
        }
        case DELETE_USER: {
            return {
                ...state,
                userList: [...action.payload],
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}

export default UserReducer

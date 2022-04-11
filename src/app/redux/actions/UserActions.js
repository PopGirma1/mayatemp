import axios from 'axios'

export const ADD_USERS = 'ADD_USERS'
export const GET_USERS = 'GET_USERS'
export const GET_SINGLE_USER = 'GET_SINGLE_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const DELETE_USER = 'DELETE_USER'

export const addUsers = (user) => async (dispatch) => {

    await axios.post('http://localhost:5000/api/v1/web/users/add', user ).then((res) => {
        console.log("from actions add users: ", user)
        dispatch({
            type: ADD_USERS,
            payload: res.data,
        })
    })

}

export const getUsers = () => async (dispatch) => {

    try {
        const { data } = await axios.get('http://localhost:5000/api/v1/web/users/');
        dispatch({ type: GET_USERS, payload: data.message })
    }
    catch(e) {
        console.log(`error: ${e}`)
    }

    // await axios.get('http://localhost:5000/api/v1/web/users/').then((res) => {
    //     console.log("from actions get users: ", res.data.message.length)
    //     if(res.data.message.length > 0) {
    //         dispatch({
    //             type: GET_USERS,
    //             payload: res.data,
    //         })
    //     }
    //     else {
    //         console.log("from actions get users: no user")
    //     }
    // })

}

export const getSingleUser = (id) => async(dispatch) => {

    try {
        const { data } = await axios.get(`http://localhost:5000/api/v1/web/users/${id}`);
        dispatch({ type: GET_SINGLE_USER, payload: data.message })
    }
    catch(e) {
        console.log(`error: ${e}`)
    }

}

export const updateUsers = (uid) => (dispatch) => {
    console.log(uid)
    axios
        .post('/api/ecommerce/update-cart-amount', { uid })
        .then((res) => {
            dispatch({
                type: UPDATE_USER,
                payload: res.data,
            })
        })
}

export const deleteUsers = (uid) => (dispatch) => {
    axios
        .post('/api/ecommerce/delete-from-cart', { uid })
        .then((res) => {
            dispatch({
                type: DELETE_USER,
                payload: res.data,
            })
        })
}
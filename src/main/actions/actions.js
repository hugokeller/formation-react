import fetch from 'isomorphic-fetch';

const API_URL = 'http://localhost:8080';

export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export const RECEIVE_USER = 'RECEIVE_USER';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const REMOVE_AUTH = 'REMOVE_AUTH';
export const REMOVE_USER = 'REMOVE_USER';

const receiveLoginInformation = (user) => ({
    type: RECEIVE_LOGIN,
    email: user.email
});

const authSucces = () => ({
    type: AUTH_SUCCESS,
    isConnected: true
});

const removeAuth = () => ({
    type: REMOVE_AUTH,
    isConnected: false
});

const removeUser = () => ({
    type: REMOVE_USER,
    user: {}
});

const receiveUserInformation = (user) => ({
    type: RECEIVE_USER,
    user: user
});

const postAuthentification = (user) => {
    return fetch(API_URL + '/users/auth', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: user.email, password: user.password})
    })
};

export const login = (user) => {
    return (dispatch) => {
        dispatch(receiveLoginInformation(user));
        postAuthentification(user)
            .then(response => response.json())
            .then(json => {
                if(json.code === 'OK'){
                    localStorage.setItem('token', json.token);
                    dispatch(authSucces());
                    dispatch(receiveUserInformation(json.user));
                }
            })
    }
};

export const logout = () => {
    return (dispatch) => {
        localStorage.removeItem('token');
        dispatch(removeAuth());
        dispatch(removeUser())
    }
};
import fetch from 'isomorphic-fetch';

const API_URL = 'http://localhost:8080';

export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveLoginInformation = (user) => ({
    type: RECEIVE_LOGIN,
    email: user.email
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
                dispatch(receiveUserInformation(json.user))
            })
    }
};
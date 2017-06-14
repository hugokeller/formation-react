export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';

const receiveLoginInformation = (user) => ({
    type: RECEIVE_LOGIN,
    email: user.email
});

export const login = (user) => {
    return (dispatch) => {
        console.log(user);
        dispatch(receiveLoginInformation(user))
    }
};
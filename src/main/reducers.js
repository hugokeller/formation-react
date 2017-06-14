import { RECEIVE_LOGIN, RECEIVE_USER } from './actions/actions'

export const user = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_LOGIN:
            return Object.assign({}, state, {
                user: {
                    email: action.email
                }
            });
        case RECEIVE_USER:
            return Object.assign({}, state, {
                user: action.user
            });
        default:
            return state
    }
};
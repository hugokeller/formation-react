import { RECEIVE_LOGIN } from './actions'

export const user = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_LOGIN:
            return Object.assign({}, state, {
                email: action.email
            });
        default:
            return state
    }
};
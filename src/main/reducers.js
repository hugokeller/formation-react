import { RECEIVE_LOGIN, RECEIVE_USER, AUTH_SUCCESS, REMOVE_AUTH, REMOVE_USER } from './actions/actions'
import {combineReducers} from 'redux'

export const user = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_LOGIN:
            return Object.assign({}, state, {
                email: action.email
            });
        case RECEIVE_USER:
            return Object.assign({}, state, {
                id: action.user.id,
                firstName: action.user.firstName,
                lastName: action.user.lastName,
                company: action.user.company,
                email: action.user.email
            });
        case REMOVE_USER:
            return {};
        default:
            return state
    }
};

export const auth = (state = {}, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return Object.assign({}, state, {
                isConnected: action.isConnected
            });
        case REMOVE_AUTH:
            return Object.assign({}, state, {
                isConnected: action.isConnected
            });
        default:
            return state
    }
};

export const rootReducer = combineReducers({user, auth});
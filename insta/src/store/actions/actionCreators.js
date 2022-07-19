import { USER_LOGGED_IN, USER_LOGGED_OUT } from './actionTypes';

const login = user => {
    return {
        type: USER_LOGGED_IN,
        payload: user
    }
}

const logout = () => {
    return {
        type: USER_LOGGED_OUT
    }
}

export default { login, logout }
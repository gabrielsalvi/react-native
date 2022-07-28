import { LOADING_USER, USER_LOADED, USER_LOGGED_IN, USER_LOGGED_OUT } from './actionTypes';
import axios from 'axios';

const authBaseUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
const API_KEY = ''

import { setMessage } from './message';

const userLogged = user => {
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

const createUser = user => {
    return dispatch => {
        axios.post(`${authBaseUrl}/signupNewUser?key=${API_KEY}`, {
            email: user.email,
            password: user.password,
            returnSecureToken: true
        })
        .catch(error => {
            dispatch(setMessage({
                title: 'Error',
                body: 'Unable to register user!'
            }))
        })
        .then(res => {
            if (res.data.localId) {
                axios.put(`/users/${res.data.localId}.json`, {
                    name: user.name
                })
                .catch(error => {
                    dispatch(setMessage({
                        title: 'Error',
                        body: 'Unable to register user!'
                    }))
                })
                .then(() => {
                    dispatch(login(user))
                })
            }
        })
    }
}

const loadingUser = () => {
    return {
        type: LOADING_USER
    }
}

const userLoaded = () => {
    return {
        type: USER_LOADED
    }
}

const login = user => {
    return dispatch => {
        dispatch(loadingUser())
        axios.post(`${authBaseUrl}/verifyPassword?key=${API_KEY}`, {
            email: user.email,
            password: user.password,
            returnSecureToken: true
        })
        .catch(error => {
            dispatch(setMessage({
                title: 'Error',
                body: 'Invalid user credentials!'
            }))
        })
        .then(res => {
            if (res.data.localId) {
                user.token = res.data.idToken
                axios.get(`/users/${res.data.localId}.json`)
                .catch(error => {
                    dispatch(setMessage({
                        title: 'Error',
                        body: 'Invalid user credentials!'
                    }))
                })
                .then(res => {
                    delete user.password;
                    user.name = res.data.name
                    dispatch(userLogged(user))
                    dispatch(userLoaded())
                })
            }
        })
    }
}

export { createUser, login, logout }
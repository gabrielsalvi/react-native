import { SET_MESSAGE } from './actionTypes'

const setMessage = message => {
    return {
        type: SET_MESSAGE,
        payload: message
    }
}

export { setMessage }
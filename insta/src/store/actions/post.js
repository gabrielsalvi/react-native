import { ADD_POST } from './actionTypes'

const addPost = post => {
    return {
        type: ADD_POST,
        payload: post
    }
}

export { addPost }
import { ADD_POST, ADD_COMMENT } from './actionTypes'

const addPost = post => {
    return {
        type: ADD_POST,
        payload: post
    }
}

const addComment = payload => {
    return {
        type: ADD_COMMENT,
        payload: payload
    }
}

export { addPost, addComment }
import axios from 'axios'
import { ADD_POST, ADD_COMMENT } from './actionTypes'

const addPost = post => {
    return dispatch => {
        axios.post('/posts.json', { ...post })
        .catch(error => console.log(error))
        .then(res => console.log(res.data))
    }

    // return {
    //     type: ADD_POST,
    //     payload: post
    // }
}

const addComment = payload => {
    return {
        type: ADD_COMMENT,
        payload: payload
    }
}

export { addPost, addComment }
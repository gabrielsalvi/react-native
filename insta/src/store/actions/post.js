import axios from 'axios'
import { CREATING_POST, POST_CREATED, SET_POSTS } from './actionTypes'

import { setMessage } from './message';

const addPost = post => {
    return (dispatch, getState) => {
        dispatch(creatingPost())
        axios({
            url: 'uploadImage',
            baseURL: 'https://us-central1-curso-rn-insta.cloudfunctions.net',
            method: 'post',
            data: {
                image: post.image.base64
            }
        }).catch (error => {
            dispatch(setMessage({
                title: 'Error',
                body: 'Unable to publish post!'
            }))
        })
        .then(res => {
            post.image = res.data.imageUrl
            axios.post(`/posts.json?auth=${getState().user.token}`, { ...post })
            .catch(error => {
                dispatch(setMessage({
                    title: 'Error',
                    body: 'Unable to publish post!'
                }))
            })
            .then(res => {
                dispatch(fetchPosts())
                dispatch(postCreated())
            })
        })
    }
}

const addComment = payload => {
    return (dispatch, getState) => {
        const path = `/posts/${payload.postId}.json?auth=${getState().user.token}`;
        axios.get(path)
        .catch(error => {
            dispatch(setMessage({
                title: 'Error',
                body: 'Unable to comment post!'
            }))
        })
        .then(res => {
            const comments = res.data.comments || []
            comments.push(payload.comment)
            axios.patch(path, { comments })
            .catch(setMessage({
                title: 'Error',
                body: 'Unable to comment post!'
            }))
            .then(res => {
                dispatch(fetchPosts())
            })
        })
    }
}

const setPosts = posts => {
    return {
        type: SET_POSTS,
        payload: posts
    }
}

const fetchPosts = () => {
    return dispatch => {
        axios.get('/posts.json')
        .catch(setMessage({
            title: 'Error',
            body: 'Unable to fetch posts!'
        }))
        .then(res => {
            const rawPosts = res.data
            const posts = []

            for (let key in rawPosts) {
                posts.push({
                    ...rawPosts[key],
                    id: key
                })
            }

            dispatch(setPosts(posts.reverse()))
        })
    }
}

const creatingPost = () => {
    return {
        type: CREATING_POST
    }
}

const postCreated = () => {
    return {
        type: POST_CREATED
    }
}

export { addPost, addComment, fetchPosts }
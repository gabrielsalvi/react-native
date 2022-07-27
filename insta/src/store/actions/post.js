import axios from 'axios'
import { ADD_COMMENT, CREATING_POST, POST_CREATED, SET_POSTS } from './actionTypes'

const addPost = post => {
    return dispatch => {
        dispatch(creatingPost())
        axios({
            url: 'uploadImage',
            baseURL: 'https://us-central1-curso-rn-insta.cloudfunctions.net',
            method: 'post',
            data: {
                image: post.image.base64
            }
        }).catch (error => console.log(error))
        .then(res => {
            post.image = res.data.imageUrl
            axios.post('/posts.json', { ...post })
            .catch(error => console.log(error))
            .then(res => {
                dispatch(fetchPosts())
                dispatch(postCreated())
            })
        })
    }
}

const addComment = payload => {
    return dispatch => {
        const path = `/posts/${payload.postId}.json`;
        axios.get(path)
        .catch(error => console.log(error))
        .then(res => {
            const comments = res.data.comments || []
            comments.push(payload.comment)
            
            axios.patch(path, { comments })
            .catch(error => console.log(error))
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
        .catch(error => console.log(error))
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
const reducer = (state = initialState, action) => {
    const fn = actions[action.type]
    return fn ? fn(state, action) : state
}

const actions = { 
    setPosts: (state, action) => {
        return {
            ...state,
            posts: action.payload
        }
    },
    addComment: (state, action) => {
        return {
            ...state,
            posts: state.posts.map(post => {
                newPost = { ...post }

                if (newPost.id === action.payload.postId) {
                    if (newPost.comments) {
                        newPost.comments = newPost.comments.concat(action.payload.comment)
                    }else {
                        newPost.comments = [action.payload.comment]
                    }
                }
                return newPost;
            })
        }
    },
    creatingPost: (state, action) => {
        return {
            ...state,
            isUploading: true
        }
    },
    postCreated: (state, action) => {
        return {
            ...state,
            isUploading: false
        }
    }
}

const initialState = {
    posts: [],
    isUploading: false,
}

export default reducer
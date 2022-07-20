const reducer = (state = initialState, action) => {
    const fn = actions[action.type]
    return fn ? fn(state, action) : state
}

const actions = { 
    addPost: (state, action) => {
        return {
            ...state,
            posts: state.posts.concat({
                ...action.payload
            })
        }
    }
}

const initialState = {
    posts: [
        {
            id: Math.random(),
            nickname: 'Rafael Pereira Filho',
            email: 'rafaelpprrflh@gmail.com',
            image: require('../../../assets/imgs/fence.jpg'),
            comments: [
                {
                nickname: 'John Ray Sheldon',
                comment: 'Stunning!'
                },
                {
                    nickname: 'Ana Julia',
                    comment: 'Beautiful!!!'
                }
            ]
        },
        {
            id: Math.random(),
            nickname: 'Zinedine Zidane',
            email: 'zizu@gmail.com',
            image: require('../../../assets/imgs/bw.jpg'),
            comments: []
        }
    ]
}

export default reducer
const reducer = (state = initialState, action) => {
    const fn = actions[action.type]
    return fn ? fn(state, action) : state
}

const actions = {
    loadingUser: (state, action) => {
        return {
            ...state,
            isLoading: true
        }
    },
    userLogged: (state, action) => {
        return {
            ...state,
            name: action.payload.name,
            email: action.payload.email
        }
    },
    logout: (state, action) => {
        return {
            ...state,
            name: '',
            email: ''
        }
    },
    userLoaded: (state, action) => {
        return {
            ...state,
            isLoading: false
        }
    }
}

const initialState = {
    name: null,
    email: null,
    isLoading: false,
}

export default reducer;
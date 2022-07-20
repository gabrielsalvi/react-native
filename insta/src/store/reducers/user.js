const reducer = (state = initialState, action) => {
    const fn = actions[action.type]
    return fn ? fn(state, action) : state
}

const actions = { 
    login: (state, action) => {
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
    }
}

const initialState = {
    name: '',
    email: ''
}

export default reducer;
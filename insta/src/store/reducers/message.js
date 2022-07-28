const reducer = (state = initialState, action) => {
    const fn = actions[action.type]
    return fn ? fn(state, action) : state
}

const actions = {
    setMessage: (state, action) => {
        return {
            ...state,
            title: action.payload.title,
            body: action.payload.body
        }
    },
}

const initialState = {
    title: '',
    body: ''
}

export default reducer;
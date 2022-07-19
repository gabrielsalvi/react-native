import reducerActions from './reducerActions'

const initialState = {
    name: '',
    email: ''
}

const reducer = (state = initialState, action) => {
    const fn = reducerActions[action.type]
    return fn ? fn(state, action) : state
}

export default reducer;
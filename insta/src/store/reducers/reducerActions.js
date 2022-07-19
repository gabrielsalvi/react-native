const login = (state, action) => {
    return {
        ...state,
        name: action.payload.name,
        email: action.payload.email
    }
}

const logout = (state, action) => {
    return {
        ...state,
        name: '',
        email: ''
    }
}

export default { login, logout }
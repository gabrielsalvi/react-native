export default {
    createUser: (state, action) => {
        const user = {
            id: Math.random(),
            ...action.payload
        }
    
        return {
            ...state,
            users: [...state.users, user]
        }
    },
    
    updateUser: (state, action) => {
        const updateUser = action.payload
    
        return {
            ...state,
            users: state.users.map(user => user.id === updateUser.id ? updateUser : user)
        }
    },
    
    deleteUser: (state, action) => {
        const userId = action.payload
    
        return {
            ...state,
            users: state.users.filter(user => user.id !== userId)
        }
    }
}
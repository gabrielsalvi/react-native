import React, { createContext, useReducer } from 'react'
import users from '../data/users'

const UsersContext = createContext()
const initialState = { users }

const createUser = (state, action) => {
    const newId = state.users[state.users.length - 1].id + 1

    const user = {
        id: newId,
        ...action.payload
    }

    const newState = {
        ...state,
        users: [...users, user]
    }

    return newState
}

const updateUser = (state, action) => {
    const updateUser = action.payload

    const newState = {
        ...state,
        users: state.users.map(user => user.id === updateUser.id ? updateUser : user)
    }

    console.log(newState.users.map(u => u.name))

    return newState
}

const deleteUser = (state, action) => {
    const userId = action.payload

    const newState = {
        ...state,
        users: state.users.filter(user => user.id !== userId)
    }

    return newState
}

export const UsersProvider = props => {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'create_user':
                console.log('insertt')
                return createUser(state, action)
            case 'update_user':
                console.log('updateee')
                return updateUser(state, action)
            case 'delete_user':
                console.log('delett')
                return deleteUser(state, action)
            default:
                console.log('defaulttt')
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <UsersContext.Provider value={{ state, dispatch }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContext
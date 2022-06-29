import React, { createContext, useReducer } from 'react'
import users from '../data/users'

const UsersContext = createContext()
const initialState = { users }

export const UsersProvider = props => {

    const reducer = (state = initialState, action) => {
        const userId = action.payload
        const newState = {
            ...state,
            users: state.users.filter(user => user.id !== userId)
        }
        return newState
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <UsersContext.Provider value={{ state, dispatch }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContext
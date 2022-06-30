import React, { createContext, useReducer } from 'react'
import users from '../data/users'
import actions from '../utils/reducer-actions'

const UsersContext = createContext()
const initialState = { users }

export const UsersProvider = props => {
    const reducer = (state, action) => {
        const fn = actions[action.type]
        return fn ? fn(state, action) : state
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <UsersContext.Provider value={{ state, dispatch }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContext
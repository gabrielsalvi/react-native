import { combineReducers, configureStore } from '@reduxjs/toolkit';

import userReducer from './reducers/user'

const allReducers = combineReducers({
    user: userReducer,
})

const storeConfig = () => {
    return configureStore({
        reducer: allReducers
    })
}

export default storeConfig
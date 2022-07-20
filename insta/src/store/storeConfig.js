import { combineReducers, configureStore } from '@reduxjs/toolkit';

import userReducer from './reducers/user'
import postsReducer from './reducers/post'

const allReducers = combineReducers({
    user: userReducer,
    posts: postsReducer,
})

const storeConfig = () => {
    return configureStore({
        reducer: allReducers
    })
}

export default storeConfig
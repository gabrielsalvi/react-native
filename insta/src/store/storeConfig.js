import { applyMiddleware, combineReducers, compose, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import userReducer from './reducers/user'
import postsReducer from './reducers/post'
import messageReducer from './reducers/message'


const reducers = combineReducers({
    user: userReducer,
    posts: postsReducer,
    message: messageReducer
})

const storeConfig = () => {
    return configureStore({ reducer: reducers }, compose(applyMiddleware(thunk)))
}

export default storeConfig
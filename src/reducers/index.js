import { combineReducers } from 'redux';

const postsReducer = (posts = [], action) => {
    if (action.type === "FETCH_POSTS") {
        return action.payload
    }

    return posts
};

const statusReducer = (status = null, action) => {

    if (action.type === "FETCH_LOADING") {
        return action.payload
    }

    if (action.type === "FETCH_ERROR") {
        return action.payload
    }

    return status
};

export default combineReducers({
    posts: postsReducer,
    status: statusReducer
})
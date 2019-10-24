import { combineReducers } from 'redux';

const postsReducer = (posts = null, action) => {
    if (action.type === "FETCH_POSTS") {
        return action.payload
    }

    return posts
};

export default combineReducers({
    posts: postsReducer
})
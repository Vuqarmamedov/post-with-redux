import postsJson from '../apis/postsJson';

export const fetchPosts = () => async dispatch => {
    dispatch({ type: 'FETCH_LOADING', payload: "loading" });
    await postsJson.get()
        .then(function (res) {
            dispatch({ type: 'FETCH_LOADING', payload: "done" });
            dispatch({ type: 'FETCH_POSTS', payload: res.data })
        })
        .catch(function (error) {
            dispatch({type: 'FETCH_ERROR', payload: "error"})
        });
};

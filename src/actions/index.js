import postsJson from '../apis/postsJson';

export const fetchPosts = () => async dispatch => {
    const response = await postsJson.get();
    dispatch({ type: 'FETCH_POSTS', payload: response.data })
};

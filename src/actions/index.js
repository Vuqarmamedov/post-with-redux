import postsJson from '../apis/postsJson';

export const fetchPosts = () => {
    let posts = [];
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
                posts.push(result)
            }
        );

    return{
        type: 'FETCH_POSTS',
        payload: posts
    }
};
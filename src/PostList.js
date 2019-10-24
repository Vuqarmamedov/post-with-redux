import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from "./actions";

class PostList extends React.Component{
    componentDidMount(){
        this.props.fetchPosts();
    }


    render() {
        if (this.props.posts != null){
            console.log(this.props.posts)
            const post = this.props.posts.map((post) => {
                return <div key={post.id}>
                    <p>Title - { post.title }</p>
                    <p>Author - { post.body }</p>
                </div>
            });
            return (
                <div>
                    {post}
                </div>
            )
        }
        else{
            return <div></div>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, { fetchPosts })(PostList);
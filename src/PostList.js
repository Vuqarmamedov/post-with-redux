import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from "./actions";
import ReactLoading from 'react-loading';
import './style.css'

class PostList extends React.Component{
    componentDidMount(){
        this.props.fetchPosts();
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        if (this.props.status === "loading"){
            return <div className="loading"> <ReactLoading type={'spinningBubbles'} color={'#ff0000'} height={667} width={375} /></div>
        }
        else if (this.props.status === "error"){
            return <div>Something went wrong</div>
        }
        else{
            return <div className="ui relaxed divided list">{this.renderList()}</div>
        }
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts,
        status: state.status
    }
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
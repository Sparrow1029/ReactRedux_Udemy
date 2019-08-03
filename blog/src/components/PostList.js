import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { fetchPosts, fetchPostsAndUsers } from '../actions';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
  componentDidMount() {
    // this.props.fetchPosts();
    this.props.fetchPostsAndUsers();
    // const { fetchPosts } = this.props;
    // fetchPosts();
  }

  renderList() {
    return this.props.posts.map(post => (
      <div className="item" key={post.id}>
        <i className="large middle aligned icon user" />
        <div className="content">
          <div className="description">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
          <UserHeader userId={post.userId} />
        </div>
      </div>
    ));
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => ({ posts: state.posts });

PostList.defaultProps = {
  fetchPostsAndUsers,
};

PostList.propTypes = {
  fetchPostsAndUsers: PropTypes.func,
};

export default connect(
  mapStateToProps,
  // { fetchPosts },
  { fetchPostsAndUsers },
)(PostList);

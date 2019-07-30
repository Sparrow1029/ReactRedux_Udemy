import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
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
  fetchPosts,
};

PostList.propTypes = {
  fetchPosts: PropTypes.func,
};

export default connect(
  mapStateToProps,
  { fetchPosts },
)(PostList);

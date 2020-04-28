import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props) {
  return (
    <React.Fragment>
      {props.postList.map((post) =>
        <Post
          title={post.title}
          post={post.post}
          id={post.id}
          key={post.id}
        />
      )}
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.array
};

export default PostList;
import React from "react";
import PropTypes from "prop-types";

function PostDetail(props) {
  const { posts, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Post Details</h1>
      <h3>Title: {posts.title}</h3>
      <h3>Post: {posts.post}</h3>
      <button onClick={props.onClickingEdit}>Update Post</button>
      <button onClick={() => onClickingDelete(posts.id)}>Delete Post</button>
      <hr />
    </React.Fragment>
  );
}

PostDetail.propTypes = {
  posts: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default PostDetail;
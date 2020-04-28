import React from 'react';
import PropTypes from "prop-types";

function Post() {
  return (
    <React.Fragment>
      <div onClick={() => props.whenPostClicked(props.id)}>
        <h3>Title: {props.title}</h3>
        <h3>Post: {props.post}</h3>
      </div>
    </React.Fragment>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired
}
export default Post;
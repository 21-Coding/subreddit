import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import PostDetail from './PostDetail';

class PostControl extends React.Component {

  constructor(props) {
    super(props);
    this.setState({
      formVisibleOnPage: false,
      masterPostList: [],
      selectedPost: null
    });
  }

  handleClick = () => {
    if (this.state.selectedPost !== null) {
      this.setState({
        formVisibleOnPage: false,
        selectedPost: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }


  handleAddingNewPostToList = (newPost) => {
    const { dispatch } = this.props
    const { id, title, post } = newPost;
    const action = {
      type: 'ADD_POST',
      id: id,
      title: title,
      post: post
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }


  handleChangingSelectedPost = (id) => {
    const selectedPost = this.state.masterPostList.filter(keg => keg.id === id)
    this.setState({ selectedPost: selectedPost });
  }



  handleDeletingPost = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_POST',
      id: id
    }
    dispatch(action);
    this.setState({ selectedPost: null });
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleEditingPostInList = (postToEdit) => {
    const { dispatch } = this.props;
    const { id, title, post } = postToEdit;
    const action = {
      type: 'ADD_TICKET',
      id: id,
      title: title,
      post: post
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedPost: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      curre = <EditPostForm post={this.state.selectedPost} onEditPost={this.handleEditingPostInList} />
      buttonText = "Return to Posts List";
    } else if (this.state.selectedPost != null) {
      currentlyVisibleState = <PostDetail
        post={this.state.selectedPost}
        onClickingDelete={this.handleDeletingPost}
        onClickingEdit={this.handleEditClick} />
      buttonText = "Return to Posts List"
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewPostForm onNewPostCreation={this.handleAddingNewPostToList} />;
      buttonText = "Return to Posts List";
    } else {
      currentlyVisibleState = <PostList postList={this.props.masterPostList}
        onPostSelection={this.handleChangingSelectedPost} />;
      buttonText = "Add Post";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        < button onClick={this.handleClick} >
          {buttonText}
        </button >
      </React.Fragment >
    );
  }
}
PostControl.propTypes = {
  masterPostList: PropTypes.object
};

export default PostControl;
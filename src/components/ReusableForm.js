import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {

  const formStyles = {
    width: '40v',
    margin: 'auto auto',
    backgroundColor: 'transparent',
    padding: '5%',
    marginBottom: '2%'
  }

  return (
    <React.Fragment>
      <div style={formStyles}>
        <form onSubmit={props.formSubmissionHandler}>
          <input
            type='text'
            name='title'
            placeholder='enter title of post' />
          <input
            type='text'
            name='post'
            placeholder='write your post here' />
          <button type='submit'>{props.buttonText}</button>
        </form>
      </div >
    </React.Fragment >
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;

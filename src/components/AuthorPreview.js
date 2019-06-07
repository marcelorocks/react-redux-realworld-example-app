import React from 'react';
import { Link } from 'react-router-dom';
import agent from '../agent';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
});

const AuthorPreview = props => {
  const user = props.user;

  const handleClick = ev => {
    ev.preventDefault();
  };

  return (
    <div className="article-preview">
      <Link to={`/@${user.username}`} className="preview-link">
        <h1>{user.username}</h1>
        <p>{user.articlesCount} articles</p>
      </Link>
    </div>
  );
}

export default connect(() => ({}), mapDispatchToProps)(AuthorPreview);

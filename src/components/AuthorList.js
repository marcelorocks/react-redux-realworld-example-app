import AuthorPreview from './AuthorPreview';
import ListPagination from './ListPagination';
import React from 'react';

const AuthorList = props => {
  if (!props.authors) {
    return (
      <div className="article-preview">Loading...</div>
    );
  }

  if (props.authors.length === 0) {
    return (
      <div className="authors-preview">
        No authors yet.
      </div>
    );
  }

  return (
    <div>
      {
        props.authors.map(author => {
          return (
            <AuthorPreview user={author} key={author.username} />
          );
        })
      }

      <ListPagination
        pager={props.pager}
        itemsCount={props.authorsCount}
        currentPage={props.currentPage} />
    </div>
  );
};

export default AuthorList;

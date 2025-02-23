import ArticleList from '../ArticleList';
import AuthorList from '../AuthorList';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { CHANGE_TAB } from '../../constants/actionTypes';

const YourFeedTab = props => {
  if (props.token) {
    const clickHandler = ev => {
      ev.preventDefault();
      props.onTabClick('feed', agent.Articles.feed, agent.Articles.feed());
    }

    return (
      <li className="nav-item">
        <a  href=""
            className={ props.tab === 'feed' ? 'nav-link active' : 'nav-link' }
            onClick={clickHandler}>
          Your Feed
        </a>
      </li>
    );
  }
  return null;
};

const GlobalFeedTab = props => {
  const clickHandler = ev => {
    ev.preventDefault();
    props.onTabClick('all', agent.Articles.all, agent.Articles.all());
  };
  return (
    <li className="nav-item">
      <a
        href=""
        className={ props.tab === 'all' ? 'nav-link active' : 'nav-link' }
        onClick={clickHandler}>
        Global Feed
      </a>
    </li>
  );
};

const AuthorsTab = props => {
  const clickHandler = ev => {
    ev.preventDefault();
    props.onTabClick('authors', agent.Users.authors, agent.Users.authors());
  };
  return (
    <li className="nav-item">
      <a
        href=""
        className={ props.tab === 'authors' ? 'nav-link active' : 'nav-link' }
        onClick={clickHandler}>
        Authors
      </a>
    </li>
  );
};

const TagFilterTab = props => {
  if (!props.tag) {
    return null;
  }

  return (
    <li className="nav-item">
      <a href="" className="nav-link active">
        <i className="ion-pound"></i> {props.tag}
      </a>
    </li>
  );
};

const mapStateToProps = state => ({
  ...state.articleList,
  ...state.authorList,
  tags: state.home.tags,
  token: state.common.token
});

const mapDispatchToProps = dispatch => ({
  onTabClick: (tab, pager, payload) => dispatch({ type: CHANGE_TAB, tab, pager, payload })
});

const MainView = props => {
  let panel;

  if (props.tab == 'authors') {
    panel = <AuthorList
      pager={props.pager}
      authors={props.authors}
      loading={props.loading}
      authorsCount={props.authorsCount}
      currentPage={props.currentPage} />
  } else {
    panel = <ArticleList
      pager={props.pager}
      articles={props.articles}
      loading={props.loading}
      articlesCount={props.articlesCount}
      currentPage={props.currentPage} />
  }

  return (
    <div className="col-md-9">
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">
          <YourFeedTab
            token={props.token}
            tab={props.tab}
            onTabClick={props.onTabClick} />

          <GlobalFeedTab tab={props.tab} onTabClick={props.onTabClick} />
          <AuthorsTab tab={props.tab} onTabClick={props.onTabClick} />
          <TagFilterTab tag={props.tag} />
        </ul>
      </div>

      {panel}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);

import {
  CHANGE_TAB,
  HOME_PAGE_LOADED
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case HOME_PAGE_LOADED:
      console.log('AUTHORS:::');
      console.log(action.payload);
      return {
        ...state,
        pager: action.pager,
        tags: action.payload[0].tags,
        authors: action.payload[1].authors,
        authorsCount: action.payload[1].authorsCount,
        currentPage: 0,
        tab: action.tab
      };
    case CHANGE_TAB:
      return {
        ...state,
        pager: action.pager,
        authors: (action.payload ? action.payload.authors : []),
        authorsCount: (action.payload ? action.payload.authorsCount : 0),
        tab: action.tab,
        currentPage: 0,
        tag: null
      };
    default:
      return state;
  }
};

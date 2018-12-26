import { SEARCH_ITEM, CLEAR_SEARCH } from '../constants/actionTypes';
import filteredList from '../API/CONTENTLISTINGPAGE-PAGE3';
const searchReducer = (search = [], action) => {
  switch (action.type) {
    case SEARCH_ITEM:
      filteredList.searchedname = action.name;
      return filteredList;
    case CLEAR_SEARCH:
      return {};
  }
  return {};
};

export default searchReducer;
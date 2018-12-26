import { combineReducers } from 'redux';
import listReducer from './list.reducer';
import searchReducer from './search.reducer';

const rootReducer = combineReducers({
  list: listReducer,
  search: searchReducer
});

export default rootReducer;
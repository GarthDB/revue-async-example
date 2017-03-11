import { combineReducers } from 'redux';
import {
  SELECT_LIST,
} from '../actions';

const selectList = (state = 'one', action) => {
  switch (action.type) {
    case SELECT_LIST:
      return action.name;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  selectList,
});

export default rootReducer;

import { combineReducers } from 'redux';
import {
  REQUEST_LIST,
  RECEIVE_LIST,
  SELECT_LIST,
} from '../actions';

const lists = (state = {
  isFetching: false,
}, action) => {
  switch (action.type) {
    case REQUEST_LIST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_LIST:
      return Object.assign({}, state, {
        isFetching: false,
        list: action.list,
        lastUpdated: action.receivedAt,
      });
    default:
      return state;
  }
};

const listByName = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_LIST:
    case RECEIVE_LIST:
      return Object.assign({}, state, {
        [action.name]: lists(state[action.name], action),
      });
    default:
      return state;
  }
};

const selectList = (state = 'two', action) => {
  switch (action.type) {
    case SELECT_LIST:
      return action.name;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  listByName,
  selectList,
});

export default rootReducer;

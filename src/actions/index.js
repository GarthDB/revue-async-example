export const REQUEST_LIST = 'REQUEST_LIST';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const SELECT_LIST = 'SELECT_LIST';

export const selectList = name => ({
  type: SELECT_LIST,
  name,
});

export const requestList = name => ({
  type: REQUEST_LIST,
  name,
});

export const recieveList = (name, list) => ({
  type: RECEIVE_LIST,
  name,
  list,
});

const lists = {
  one: ['list one item', 'another list one item'],
  two: ['list two item', 'another list two item'],
};

export const fetchList = name => (dispatch, getState) => {
  dispatch(requestList(name));
  setTimeout(() => {
    dispatch(recieveList(name, lists[name]));
  }, 2000);
};

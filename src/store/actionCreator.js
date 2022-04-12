import actionTypes from "./types";
export const getAllUswer = () => ({ type: actionTypes.GET_ALL_USER });

export const sendToReduxAllUser = (users) => ({
  type: actionTypes.SEND_ALL_USER_REDUX,
  payload: { users: users },
});

export const getCurrentPosts = (id) => ({
  type: actionTypes.CHANGE_STATUS,
  payload: id,
});

export const sortCurrentPostRedux = (id, value) => ({
  type: actionTypes.SORT_POSTS,
  payload: { id, value },
});

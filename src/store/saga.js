import { takeEvery, put, call } from "redux-saga/effects";
import actionTypes from "./types";
import { sendToReduxAllUser } from "./actionCreator";
export function* watcherAddLike() {
  yield takeEvery(actionTypes.GET_ALL_USER, workerGetAllUser);
}
function* workerGetAllUser() {
  const a = yield call(getAllUser);
  yield put(sendToReduxAllUser(a));
}
async function getAllUser() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersPosts = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const usersData = await users.json();
  const usersPostsData = await usersPosts.json();
  return { usersData, usersPostsData };
}

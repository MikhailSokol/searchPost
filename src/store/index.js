import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import saga from "redux-saga";
import { all } from "@redux-saga/core/effects";
import { rootReducer } from "./reducer";
import { watcherAddLike } from "./saga";
const sagaMiddleware = saga();

const composeEnhancer =
  process.env.NODE_ENV === "production"
    ? applyMiddleware(sagaMiddleware)
    : composeWithDevTools(applyMiddleware(sagaMiddleware));

export const store = createStore(rootReducer, composeEnhancer);

sagaMiddleware.run(function* () {
  yield all([watcherAddLike()]);
});

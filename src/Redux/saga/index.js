import AsyncSaga from "./asyncSaga";
import { all, fork } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([fork(AsyncSaga)]);
}

import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  errorOccuredAction,
  successAction,
  FETCH_DATA,
} from "../Actions/asyncCall";
import { ApiCaller } from "../../Utility/ApiCaller";

function* fetchDataSaga({ payload }) {
  console.log("payload at saga", payload);
  try {
    const res = yield call(ApiCaller, payload);
    yield put(successAction(res.data));
  } catch (e) {
    yield put(errorOccuredAction(e));
  }
}

export default function* saga() {
  yield all([takeLatest(FETCH_DATA, fetchDataSaga)]);
}

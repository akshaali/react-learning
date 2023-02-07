import { call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_CAT_LIST,
  fetchCatListResolvedAction,
  fetchCatListRejectedAction,
} from "../Actions/getCatListAction";
import { ApiCaller } from "../../Utility/ApiCaller";

function* fetchCatListSaga({ payload }) {
  console.log("fetchCatListSaga");
  try {
    console.log("try started")
    const response = yield call(ApiCaller, payload);
    console.log("got response in", response);
    yield put(fetchCatListResolvedAction(response.data));
  } catch (error) {
    console.log("error in saga")
    yield put(fetchCatListRejectedAction(error.message));
  } finally {
    console.log("fimally saga got executed")
  }
}

export default function* saga() {
  yield takeLatest(FETCH_CAT_LIST, fetchCatListSaga);
}

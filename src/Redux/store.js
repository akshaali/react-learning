import CreateSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./Reducers";
import rootSaga from "./Saga";

const sagaMiddleware = CreateSagaMiddleware();
const store = configureStore({
  reducer: Reducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
export default store;

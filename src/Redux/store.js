import Reducer from "./Reducers";
import rootSaga from "./saga";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: Reducer,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga)


export default store;

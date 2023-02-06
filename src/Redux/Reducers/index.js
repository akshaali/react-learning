import StepReducer from "./step";
import CounterReducer from "./counter";
import getCatListReducer from "./getCatListReducer";
import { combineReducers } from "@reduxjs/toolkit";

const Reducer = combineReducers({
  StepReducer,
  CounterReducer,
  getCatListReducer
});

export default Reducer
import StepReducer from "./step";
import CounterReducer from "./counter";
import { combineReducers } from "@reduxjs/toolkit";

const Reducer = combineReducers({
  StepReducer,
  CounterReducer,
});

export default Reducer
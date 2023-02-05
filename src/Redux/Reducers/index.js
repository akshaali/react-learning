import StepReducer from "./step";
import CounterReducer from "./counter";
import AsyncReducer from './asyncReducer'
import { combineReducers } from "@reduxjs/toolkit";

const Reducer = combineReducers({
  StepReducer,
  CounterReducer,
  AsyncReducer
});

export default Reducer
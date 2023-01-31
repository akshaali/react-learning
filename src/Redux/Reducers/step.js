import { DECREAMENT_COUNTER, INCREAMENT_COUNTER } from "../Actions/counter";

const initialState = {
  counter: 0,
  title: "step",
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case DECREAMENT_COUNTER:
      return { ...state, counter: state.counter - 1 };
    case INCREAMENT_COUNTER:
      console.log("INCREAMENT_COUNTER redux called", state);
      return { ...state, counter: state.counter + 1 };
    default:
      return { ...state };
  }
};

export default CounterReducer;

import { DECREAMENT_COUNTER, INCREAMENT_COUNTER, UPDATE_COUNTER } from "../Actions/counter";

const initialState = {
  counter: 0,
  title: "counter",
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case DECREAMENT_COUNTER:
      return { ...state, counter: state.counter - 1 };
    case INCREAMENT_COUNTER:
      console.log("INCREAMENT_COUNTER redux called", state);
      return { ...state, counter: state.counter + 1 };
    case UPDATE_COUNTER:
      console.log("Updatecounter reducer called", action);
      return { ...state, counter : Number(action.payload)};
    default:
      return { ...state };
  }
};

export default CounterReducer;

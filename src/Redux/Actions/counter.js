// Actions

export const INCREAMENT_COUNTER = "INCREAMENT_COUNTER";
export const DECREAMENT_COUNTER = "DECREAMENT_COUNTER";
export const UPDATE_COUNTER = "UPDATE_COUNTER";

export const increamentCounterAction = () => {
  console.log("IncrementCounterAction called");
  return {
    type: INCREAMENT_COUNTER,
  };
};

export const decreamentCounterAction = () => ({ type: DECREAMENT_COUNTER });

export const updateCounterAction = (payload) => {
  return {
    type: UPDATE_COUNTER,
    payload,
  };
};

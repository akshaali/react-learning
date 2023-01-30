import { useDispatch, useSelector } from "react-redux";
import {
  increamentCounterAction,
  decreamentCounterAction,
} from "../Redux/Actions/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log("Statesss from redux", state);

  return (
    <div>
      <h1>{state.title}</h1>
      <h5>Counter value : {state.counter}</h5>
      <button onClick={() => dispatch(increamentCounterAction())}>
        {" "}
        Increment +
      </button>
      <button onClick={() => dispatch(decreamentCounterAction())}>
        decrement -
      </button>
    </div>
  );
};

export default Counter;

/*
useDispatch - dispatch action 
useSelector -  access store
*/

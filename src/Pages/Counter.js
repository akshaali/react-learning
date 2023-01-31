import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increamentCounterAction,
  decreamentCounterAction,
  updateCounterAction,
} from "../Redux/Actions/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const counterState = useSelector((state) => state.CounterReducer);

  const [inputValue, setInputValue] = useState();

  const handleOnChange = (event) =>{
    setInputValue(event.target.value);
  }

  console.log("Statesss from redux", counterState);

  return (
    <div>
      <h1>{counterState.title}</h1>
      <h5>Counter value : {counterState.counter}</h5>
      <button onClick={() => dispatch(increamentCounterAction())}>
        Increment +
      </button>
      <button onClick={() => dispatch(decreamentCounterAction())}>
        decrement -
      </button>
      <input type="number" onChange={handleOnChange} />
      <button onClick={() => dispatch(updateCounterAction(inputValue))}>update counter</button>
    </div>
  );
};

export default Counter;

/*
useDispatch - dispatch action 
useSelector -  access store
*/

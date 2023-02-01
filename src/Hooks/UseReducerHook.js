/*
Hooks
 *useReducer --> const [stateName, callReducerFunction] = useReducer(reducerFunction, initialValue);
    1. similar to useState 
 */

import { useReducer } from "react";

const UseReducerHooksComponent = () => {

  const reducerFunction = (state, action) => {
    console.log("state and action", state, action);
    switch (action.type) {
      case "EMAIL":
        return { ...state, email: action.value };
      case "NAME":
        return { ...state, name: action.value };
      default:
        return state;
    }
  };
  const [detail, dispatch] = useReducer(reducerFunction, {
    name: "",
    email: "",
  });

  console.log("detail", detail);
  return (
    <div>
      <h2>useReducer</h2>
      <input
        value={detail.email}
        type={"text"}
        placeholder="email"
        onChange={(e) => dispatch({ type: "EMAIL", value: e.target.value })}
      />
      <input
        value={detail.name}
        type={"text"}
        placeholder="name"
        onChange={(e) => dispatch({ type: "NAME", value: e.target.value })}
      />
    </div>
  );
};

export default UseReducerHooksComponent;

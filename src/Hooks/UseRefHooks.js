/*
Hooks
 * useRef -->> const variableName = useRef(initialValue)
    1. saves a refrence 
    2. mutable 
    3. rederendering is not dependent on the useRef
 */

import { useEffect, useRef } from "react";

const UseRefHookComponent = () => {
  const countRef = useRef(0);

  useEffect(() => {
    countRef.current = countRef.current + 1;
    console.log("rerendered", countRef);
  }, []);

  console.log("useRef: ", countRef.current);

  const fun = () => {}

  return (
    <div>
      <h2>React different Hooks</h2>
      <h3>number of time component rendered</h3>
    </div>
  );
};

export default UseRefHookComponent;

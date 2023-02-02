/*
 * useCallback --> useCallback(callbackFunction, depencyArray) (Second argument is optional)
   1. returns a function 
   2. Function will only be recreated when states in depency array get updated
   3. we use this for optimization
*/

import { useCallback, useState } from "react";

const UseCallbackHookComponent = () => {
  const [name, setName] = useState("Apt");

  const handleOnClick = useCallback(() => {
    alert("I am clicked!! " + name);
  }, [name]);

  return (
    <div>
      <h2>React UseMemo Hook</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleOnClick}>Click me</button>
    </div>
  );
};

export default UseCallbackHookComponent;

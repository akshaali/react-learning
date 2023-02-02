/*  
* useMemo --> useMeno(callbackFunction, depencyArray) (Second argument is optional)
   1. return a value
   2. value will be recalculated when the state in the depency array get updated
   3. we use this for optimization purpose 
 */

import { useState, useMemo } from "react";

const UseMemoHookComponent = () => {
  const [value, setValue] = useState(10);

  const memoizedValue = useMemo(() => value * value + value, [value]);

  return (
    <div>
      <h2>React UseCallback Hooks {memoizedValue}</h2>
      <input
        type={"number"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default UseMemoHookComponent;

/*
COmponests whose data is handled by the DOM itself is called Uncontrolled Components
    SCENARIOS                   UNCONTROLLED COMPONENTS           CONTROLLED COMPONENTS
1.  validate on submit            Yes                               Yes
2.  Instant validatio             No                                Yes
3.  Dependency of inputs          No                                Yes
4.  Disabling the submit button   No                                Yes
*/

import { useRef } from "react";

const UncontrolledComponents = () => {
  const inputRef = useRef(null);

  const handleOnClick = () => {
    console.log("input ref ", inputRef);
    if(inputRef.current.value){

    }
  };
  console.log("input ref =>  ", inputRef);

  return (
    <div>
      UnControlled Components
      <input ref={inputRef} type="text" placeholder={"write your name"} />
      <button onClick={handleOnClick}>Submit</button>
    </div>
  );
};

export default UncontrolledComponents;

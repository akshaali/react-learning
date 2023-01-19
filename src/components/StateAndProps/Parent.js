import { useState } from "react";
import "./App.css";
import Component1 from "./comp1";

function App() {
  // const [stateName, setterFunction] = useState(initialValue)
  const [name, setName] = useState("Aksha");
  const [age, setAge] = useState(10);

  console.log("name & age is ", name, age);

  const handleOnClickName = () => {
    setName("Simran");
  };

  const handleOnClickAge = () => {
    setAge(20);
  };

  return (
    <div className="App">
      <h1>Context API</h1>
      <button onClick={handleOnClickName}>change name</button>
      <button onClick={handleOnClickAge}>change age</button>
      <p>
        {name} {age}
      </p>
      <Component1 nameProp={name} ageProp={age} />
    </div>
  );
}

export default App;

/*
Lifecycle is: 
1. mounting 
2. updating 
3. unmounting
*/

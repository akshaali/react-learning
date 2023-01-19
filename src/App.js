import { useState, createContext } from "react";
import "./App.css";
import Component1  from "./components/comp1";

export const AppContextInstance = createContext(); // instance is created 

function App() {
  // const [stateName, setterFunction] = useState(initialValue)
  const [name, setName] = useState("Aksha");
  const [age, setAge] = useState(10);

  return (
    <AppContextInstance.Provider value={{nameState1: name, ageState: age }}>
      <div className="App">
      <h1>Context Api - App.js</h1>
      <button onClick={() => setName("Satish")}>change name</button>
      <Component1 />
    </div>
    </AppContextInstance.Provider>
  );
}

export default App;

/*
Lifecycle is: 
1. mounting 
2. updating 
3. unmounting
*/


/*
1. create the instance - createContext
2. Wrap the parent with the provider that instace gives - pass the state 
that we want to share with the childrens 
3. useContext - way to get to the states


*/

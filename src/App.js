import "./App.css";
import Counter from "./Pages/Counter";
import TopNavigation from "./Common/TopNavigation";
import ClassComponent from "./Pages/classComp";
import Store from "./Redux/store";
import { Provider } from "react-redux";
import AsyncComponent from "./Pages/AsyncComponent";

function App() {
  console.log("Store",Store.getState());
  return (
    <Provider store={Store}>
      <div className="App">
        <TopNavigation />
        {/* <Counter />
        <ClassComponent /> */}
        <AsyncComponent />
      </div>
    </Provider>
  );
}

export default App;

import "./App.css";
import Counter from "./Pages/Counter";
import TopNavigation from "./Common/TopNavigation";
import ClassComponent from "./Pages/classComp";
import Store from "./Redux/store";
import { Provider } from "react-redux";

function App() {
  console.log("Store",Store, Store.getState());
  return (
    <Provider store={Store}>
      <div className="App">
        <TopNavigation />
        <Counter />
        <ClassComponent />
      </div>
    </Provider>
  );
}

export default App;

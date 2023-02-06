import "./App.css";
import Counter from "./Pages/Counter";
import TopNavigation from "./Common/TopNavigation";
import ClassComponent from "./Pages/classComp";
import Store from "./Redux/store";
import { Provider } from "react-redux";
import CatList from "./Pages/CatList";

function App() {
  console.log("Store", Store.getState());
  return (
    <Provider store={Store}>
      <div className="App">
        <TopNavigation />
        {/* <Counter />
        <ClassComponent /> */}
        <CatList />
      </div>
    </Provider>
  );
}

export default App;

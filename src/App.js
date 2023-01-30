import "./App.css";
import Counter from "./Pages/Counter";
import Store from "./Redux/store";
import { Provider } from "react-redux";

function App() {
  console.log("Store",Store, Store.getState());
  return (
    <Provider store={Store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;

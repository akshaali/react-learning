import './App.css';
import UseRefHookComponent from './Hooks/UseRefHooks';
import UseReducerHooksComponent from './Hooks/UseReducerHook'
import UseCallbackHookComponent from './Hooks/UseCallBackHook'
import UseMemoHookComponent from './Hooks/UseMemoHook';

function App() {
  return (
    <div className="App">
      {/* <UseRefHookComponent /> */}
      {/* <UseReducerHooksComponent /> */}
      {/* <UseCallbackHookComponent /> */}
      <UseMemoHookComponent />
    </div>
  );
}

export default App;

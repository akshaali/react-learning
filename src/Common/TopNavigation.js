import { useSelector } from "react-redux";

const TopNavigation = () => {
  const counter = useSelector((state) => state.CounterReducer.counter);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 20,
          backgroundColor: "#f1f1f1",
          borderWidth: 10,
          borderColor: "red"
        }}
      >
        <h2> Our Counter</h2>
        <h3>Counter value: {counter}</h3>
      </div>
    </div>
  );
};

export default TopNavigation;

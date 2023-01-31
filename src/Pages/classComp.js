import React from "react";
import { connect } from "react-redux";
import {
  increamentCounterAction,
  decreamentCounterAction,
} from "../Redux/Actions/counter";

class ClassComponent extends React.Component {
  render() {
    console.log("props of ClassComponent", this.props);
    const { counterstates, decreamentCounterAction, increamentCounterAction } =
      this.props;
    return (
      <div>
        ClassComponent
        <h1>{counterstates.title}</h1>
        <h5>Counter value : {counterstates.counter}</h5>
        <button onClick={() => increamentCounterAction()}>Increment +</button>
        <button onClick={() => decreamentCounterAction()}>decrement -</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counterstates: state.CounterReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increamentCounterAction: () => dispatch(increamentCounterAction()),
    decreamentCounterAction: () => dispatch(decreamentCounterAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClassComponent);

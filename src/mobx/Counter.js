import React from "react";
// import { ReactDOM } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

export const state = observable({
  count: 0,
  increment: action(() => {
    state.count += 1;
  }),
  decrement: action(() => {
    state.count -= 1;
  }),
  get countByTwo() {
    return this.count * 2;
  },
  get countByThree() {
    return this.count * 3;
  },
});
function Counter(props) {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        {props.state.count}
        <p>
          <button onClick={props.state.increment}> Add</button>
          <button onClick={props.state.decrement}> Reduce</button>
        </p>
        <div>Count by two : {props.state.countByTwo}</div>
        <div>Count by three : {props.state.countByThree}</div>
      </div>
      ;
    </>
  );
}

export default observer(Counter);

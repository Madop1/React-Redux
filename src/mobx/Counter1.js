import React from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react';
export const state = observable({
    count: 0,
    increment: action(() => {
        state.count += 1;
    }),
    decrement: action(() => {
        state.count -= 1;
    })
});
const Counter1 = (props) => {
    return (
        <div>
            <h3>{props.state.count}</h3>
            <button onClick={props.state.increment}>Increment</button>
            <button onClick={props.state.decrement}>Decrement</button>
        </div>
    )
}
export default observer(Counter1)
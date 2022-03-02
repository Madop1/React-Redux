import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux/IceCream/iceCreamActions";

function IceCreamContainer(props) {
  const numberOfIceCream = useSelector(
    (state) => state.iceCream.numberOfIceCream
  );
  const dispatch = useDispatch();
  return (
    <div>
      <h2> Number of IceCreams remaining - {numberOfIceCream} </h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
    </div>
  );
}

export default IceCreamContainer;

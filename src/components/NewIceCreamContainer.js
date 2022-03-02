import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux/IceCream/iceCreamActions";

function NewIceCreamContainer() {
  const [number, setNumber] = useState(1);
  const numberOfIceCream = useSelector(
    (state) => state.iceCream.numberOfIceCream
  );
  const dispatch = useDispatch();
  if (numberOfIceCream < 0) {
    return false;
  }
  return (
    <div>
      <h2> 🍦 available at store - {numberOfIceCream} </h2>
      <input
        type="text"
        value={number}
        placeholder="Enter values in numbers"
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(buyIceCream(number))}>
        Buy IceCream
      </button>
    </div>
  );
}

export default NewIceCreamContainer;

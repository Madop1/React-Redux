import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/cakes/cakeAction";

function NewCakeContainer() {
  const [number, setNumber] = useState(1);
  const numOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  if (numOfCakes < 0) {
    return false;
  }
  return (
    <div>
     
      <h2> 🎂 available at store - {numOfCakes} </h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter values in numbers"
      />
      <button onClick={() => dispatch(buyCake(number))}>Buy cake</button>
    </div>
  );
}

export default NewCakeContainer;

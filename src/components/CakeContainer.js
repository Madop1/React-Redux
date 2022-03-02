import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { buyCake } from "../redux/cakes/cakeAction";

function CakeContainer(props) {
    const numOfCakes = useSelector(state => state.cake.numberOfCakes)
    // console.log(numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h2> Cake available at store - {numOfCakes} </h2>
      <button onClick={()=>dispatch(buyCake())}>Buy cake</button>
    </div>
  );
}

export default CakeContainer;

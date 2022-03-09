import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./IceCream/iceCreamReducers";

const reducerCombine = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
export default reducerCombine;

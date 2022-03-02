import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./IceCream/iceCreamReducers";
// import userReducers from "./User/userReducers";

const reducerCombine = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  // user: userReducers,
});
export default reducerCombine;

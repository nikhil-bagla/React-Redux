import { combineReducers } from "redux";
import BatReducer from "./Bat/batReducer";
import BallReducer from "./Ball/ballReducer";
console.log("root Reducer");
// merged store
const rootReducer = combineReducers({
    Ball: BallReducer,
    Bat: BatReducer
});
export default rootReducer;
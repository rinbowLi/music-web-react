import { combineReducers } from "redux-immutable";
import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store'

console.log(recommendReducer)
const cReducer = combineReducers({
  recommend: recommendReducer
});

export default cReducer;
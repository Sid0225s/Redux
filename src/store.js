import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

const reducers = combineReducers({});
const initialstate = {};

export const store = createStore(
  reducers,
  initialstate,
  applyMiddleware(thunk)
);

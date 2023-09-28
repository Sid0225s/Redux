import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { TodoReducer } from "./Reducers/TodoReducer";

const middleware = [thunk]; // Wrap thunk in an array
const reducers = combineReducers({
  Todo: TodoReducer,
});
const initialState = {}; // Corrected variable name

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)) // Spread the middleware array
);

export default store;

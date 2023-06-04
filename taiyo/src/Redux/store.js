import { legacy_createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Reducer } from "./Reducer";

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = legacy_createStore(
  Reducer,
  composeEnhancer(applyMiddleware(thunk))
);

export { store };

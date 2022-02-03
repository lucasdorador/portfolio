import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./store/rootReducer";

const root = (state, action) => {
  return rootReducer(state, action);
};

export default (props) => {
  let store =
    process.env.REACT_APP_ENV !== "PROD"
      ? createStore(
          root,
          props.initialState,
          composeWithDevTools(applyMiddleware(ReduxThunk))
        )
      : createStore(root, props.initialState, applyMiddleware(ReduxThunk));

  return <Provider store={store}>{props.children}</Provider>;
};

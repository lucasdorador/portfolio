import React from "react";
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import ReduxThunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "./store/modules/rootReducer";

// import { persistReducer, persistStore } from "redux-persist";
// import { encryptTransform } from "redux-persist-transform-encrypt";

// import { PersistGate } from "redux-persist/integration/react";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "InperaADM",
//   storage,
//   transforms: [
//     encryptTransform({
//       secretKey: `${process.env.REACT_APP_CRYPTO_PRIVATE_KEY}`,
//     }),
//   ],
//   whitelist: ["usuarioLogado", "paginacao", "empresas", "usuarios"],
// };

// const root = (state, action) => {
//   if (action.type === "RESET_REDUX") {
//     state = undefined;
//   }

//   return rootReducer(state, action);
// };

// const _exportRoot = (props) => {
//   let store =
//     process.env.REACT_APP_ENV !== "PROD"
//       ? createStore(
//           persistReducer(persistConfig, root),
//           props.initialState,
//           composeWithDevTools(applyMiddleware(ReduxThunk))
//         )
//       : createStore(
//           persistReducer(persistConfig, root),
//           props.initialState,
//           applyMiddleware(ReduxThunk)
//         );

//   let persistor = persistStore(store);

//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         {props.children}
//       </PersistGate>
//     </Provider>
//   );
// };

// export default _exportRoot;

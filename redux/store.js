import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import userReducer from "./userSlice";
import cartReducer from "./cartSlice";
import foodReducer from "./foodSlice";
// import { composeWithDevTools } from "remote-redux-devtools";

// import { combineReducers } from "redux";

/* const rootReducer = combineReducers({
  counterReducer,
});
 */

// Augment middleware to consider Immutable.JS iterables serializable
/* const isSerializable = (value) => Iterable.isIterable(value) || isPlain(value);

const getEntries = (value) =>
  Iterable.isIterable(value) ? value.entries() : Object.entries(value);

const serializableMiddleware = createSerializableStateInvariantMiddleware({
  isSerializable,
  getEntries,
  warnAfter: 128,
}); */

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    userAuth: userReducer,
    cart: cartReducer,
    food: foodReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  // middleware: composeEnhancers(applyMiddleware(...middleware)),
});

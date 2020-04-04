import React from "react";
import { Provider } from "react-redux";
// import { createStore } from "redux";
// import { rootReducer } from "./src/store/reducers/rootReducer";
import { store } from "./src/store/index";
import MainStackNavigator from "./src/components/MainStackNavigator";

export default function App() {
  return (
    <Provider store={store}>
      <MainStackNavigator />
    </Provider>
  );
}

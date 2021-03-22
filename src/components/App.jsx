import React from "react";
import Posts from "./Posts";
import PostForm from "./PostForm";
import { Provider } from "react-redux"; //component that holds the store and provides for all its child components
import store from "../store";
export default function App() {
  return (
    <Provider store={store}>
      <div>
        <br />
        <PostForm />
        <br />
        <Posts />
      </div>
    </Provider>
  );
}

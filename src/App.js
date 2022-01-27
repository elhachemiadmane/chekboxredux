import React, { Component } from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/chekboxessai4";
//import Chek1 from "../components/chekboxessai1";
//import Chek2 from "../components/chekboxessai2";
import Pagemenu1 from "./container/chekboxessai3";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Pagemenu1 />
        </div>
      </Provider>
    );
  }
}

export default App;

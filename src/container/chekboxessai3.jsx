//import { Row } from "antd";
import React, { Component } from "react";
import Chek1 from "../components/chekboxessai1";
import Chek2 from "../components/chekboxessai2";
//import { connect } from "react-redux";
class Pagemenu1 extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          // backgroundColor: "blue",
          height: "100vh",
        }}
      >
        hello <br />
        <Chek1 />
        <Chek2 />
      </div>
    );
  }
}
export default Pagemenu1;

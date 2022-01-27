import React, { Component } from "react";
import { Button, Checkbox } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

//import moment from "moment";
//import { connect } from "react-redux";

class Chek2 extends Component {
  //crer consturoctor
  constructor(props) {
    super(props);
    this.state = {
      checked: "",
    };
  }
  //pour changement au niveau checkbox et enregistrer
  choixchange(e) {
    this.setState({ input: e.target.checked });
  }

  render() {
    function onChange(value) {
      console.log("changed", value);
    }
    function onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    }
    function onChange(value) {
      console.log(`selected ${value}`);
    }
    function onSearch(val) {
      console.log("search:", val);
    }

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "blanchedalmond",
          height: "83vh",
          width: "20%",
        }}
      >
        Information2 <br />
        <Button type="primary" icon={<DeleteOutlined />}>
          B2
        </Button>{" "}
      </div>
    );
  }
}
export default Chek2;

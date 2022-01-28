import React, { Component } from "react";
import { Button, Checkbox } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
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
   console.log("WWWWWWWWWWWWW3",this.props)

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
        <Button type="primary" icon={<DeleteOutlined />} disabled={this.props.etatcheckboxa1}>
          B2
        </Button>{" "}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("etat du checkbox", state);
  return {
    //alpha: "one"
    etatcheckboxa1: state.checka1,
  };
};
export default connect(mapStateToProps, null)(Chek2)


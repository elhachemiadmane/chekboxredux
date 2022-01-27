import React, { Component } from "react";
import { Button, Checkbox } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { connect } from "react-redux";

class Chek1 extends Component {
  //crer consturoctor

  //pour changement au niveau checkbox et enregistrer

  render() {
    {
      /* ///////////////////////numéro 1*/
    }
    function onChange(value) {
      console.log("changed", value);
    }

    // pour checkbox
    console.log(this.props);
    var dispatch = this.props.dispatch;

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
          backgroundColor: "aquamarine",
          height: "83vh",
          width: "20%",
        }}
      >
        Information 1 <br />
        {/* ////////////////////////////////////////////////////check box choix de 1  */}
        <Checkbox
          onChange={(e) => {
            dispatch({
              type: "is selected a1",
              step: 1,
            });
          }}
        >
          {" "}
          a1{" "}
        </Checkbox>
        <Checkbox onChange={onChange}>a2</Checkbox>
        <Button
          //style={{etatcheckboxa1==1!}}
          type="primary"
          icon={<EditOutlined />}
          disabled={!this.state}

          //pour activer ou désavtiver le bouton enregistrer
        >
          B1
        </Button>{" "}
      </div>
    );
  }
}

//apprendre par couer; pour acceder a redux
const mapStateToProps = (state) => {
  console.log("etat du checkbox", state);
  return {
    //alpha: "one"
    etatcheckboxa1: state.checka1,
  };
};
export default connect(mapStateToProps, null)(Chek1);

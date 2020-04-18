import React, { Component } from "react";
import { Row } from "antd";

export class Relatorio extends Component {
  componentDidMount = () => {
    console.log("====================================");
    console.log("Relatorio");
    console.log("====================================");
  };
  render() {
    return (
      <div>
        <Row>
            <h1>Hello Mundo</h1>
        </Row>
      </div>
    );
  }
}

export default Relatorio;

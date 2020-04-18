import React, { Component } from "react";
import { Row } from "antd";

export class Relatorio extends Component {
  componentDidMount = () => {
    window.location.open="http://www.google.pt";
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

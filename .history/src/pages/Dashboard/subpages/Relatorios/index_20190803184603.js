import React, { Component } from "react";
import { Row } from "antd";

export class Relatorio extends Component {
  componentDidMount = () => {
    window.open("https://www.w3schools.com");
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

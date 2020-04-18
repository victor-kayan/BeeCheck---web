import React, { Component } from "react";
import { Row } from "antd";

export class Relatorio extends Component {
  componentDidMount = () => {
    window.open("https://www.w3schools.com");
  };
  render() {
    return (
      <Layout.Content style={{ margin: "0 16px" }}>
        <BreadcrumBee mapa={mapa} />

        <div
          style={{
            padding: 24,
            margin: 10,
            background: "#fff",
            minHeight: 360,
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)"
          }}
        />
      </Layout.Content>
    );
  }
}

export default Relatorio;

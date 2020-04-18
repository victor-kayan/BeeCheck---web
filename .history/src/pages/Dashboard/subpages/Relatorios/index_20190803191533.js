import React, { Component } from "react";
import { Row, Layout } from "antd";
import BreadcrumbBee from "../../../../componentes/BreadcrumBee";
import { uris } from "../../../../assets";

export class Relatorio extends Component {
  componentDidMount = () => {
    window.open(
      uris.BASE_URL +
        "tecnico/apiarios/relatorios?token_relatorio=" +
        localStorage.getItem("token_relatorios")
    );
  };

  componentWillReceiveProps = () => {
      console.log('====================================');
      console.log('Clicou');
      console.log('====================================');
  }
  render() {
    const mapa = [
      {
        key: "",
        name: "Home",
        icon: "home"
      },
      {
        key: "",
        name: "Relatorios",
        icon: "file-search"
      }
    ];

    return (
      <Layout.Content style={{ margin: "0 16px" }}>
        <BreadcrumbBee mapa={mapa} />

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

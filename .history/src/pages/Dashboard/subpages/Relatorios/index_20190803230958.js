import React, { Component } from "react";
import { Row, Layout, Checkbox, Radio, Button } from "antd";
import BreadcrumbBee from "../../../../componentes/BreadcrumBee";
import { uris } from "../../../../assets";

export class Relatorio extends Component {
  state = {
    disabled: true
  };

  componentDidMount = () => {
    window.open(
      uris.BASE_URL +
        "tecnico/apiarios/relatorios?token_relatorio=" +
        localStorage.getItem("token_relatorios")
    );
  };

  componentWillReceiveProps = () => {
    window.open(
      uris.BASE_URL +
        "tecnico/apiarios/relatorios?token_relatorio=" +
        localStorage.getItem("token_relatorios")
    );
  };

  toggleDisabled = () => {
    this.setState({
      disabled: !this.state.disabled
    });
  };

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

    const options = [
      { label: "Visitas nos apiário", value: "apiario" },
      { label: "Visitas nas colmeias", value: "colmeia" }
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
        >
          <Radio defaultChecked={false} disabled={this.state.disabled}>
            Disabled
          </Radio>
          <br />
          <Radio defaultChecked disabled={this.state.disabled}>
            Disabled
          </Radio>
          <div style={{ marginTop: 20 }}>
            <Button type="primary" onClick={this.toggleDisabled}>
              Toggle disabled
            </Button>
          </div>
        </div>
      </Layout.Content>
    );
  }
}

export default Relatorio;

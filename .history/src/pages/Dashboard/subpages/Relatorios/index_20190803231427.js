import React, { Component } from "react";
import { Row, Layout, Checkbox, Radio, Button } from "antd";
import BreadcrumbBee from "../../../../componentes/BreadcrumBee";
import { uris } from "../../../../assets";

export class Relatorio extends Component {
  state = {
    disabled: true,
    value: 1
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

  onChange = e => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value
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

    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px"
    };

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
          <Radio.Group onChange={this.onChange} value={this.state.value}>
            <Radio style={radioStyle} value={1}>
              Option A
            </Radio>
            <Radio style={radioStyle} value={2}>
              Option B
            </Radio>
            <Radio style={radioStyle} value={3}>
              Option C
            </Radio>
            <Radio style={radioStyle} value={4}>
              More...
              {this.state.value === 4 ? (
                <Input style={{ width: 100, marginLeft: 10 }} />
              ) : null}
            </Radio>
          </Radio.Group>
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

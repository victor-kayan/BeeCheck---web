import React, { Component } from "react";
import { Row, Layout, Radio, Button, Col, Divider } from "antd";
import BreadcrumbBee from "../../../../../componentes/BreadcrumBee";
import { uris } from "../../../../../assets";

export class RelatorioVisitas extends Component {
  state = {
    disabled: false,
    tipoVisita: "apiario",
    orintacaoPapel: "portrait"
  };

  onChange = e => {
    this.setState({
      tipoVisita: e.target.value
    });

    console.log('====================================');
    console.log(e.target.value);
    console.log('====================================');
    if (e.target.value === "colmeia") {
      this.setState({ disabled: true });
    } else {
      this.setState({ disabled: false });
    }
  };

  onChangeOrientacaoPapel = e => {
    this.setState({
      orintacaoPapel: e.target.value
    });
  };

  handleDownload = () => {
    window.open(
      uris.BASE_URL +
        "tecnico/visitas/relatorios?token_relatorio=" +
        localStorage.getItem("token_relatorios") +
        "&tipo_visita=" +
        this.state.tipoVisita +
        "&orientacao_papel=" +
        this.state.orintacaoPapel +
        "&acao=download"
    );
  };

  handleVisualizar = () => {
    window.open(
      uris.BASE_URL +
        "tecnico/visitas/relatorios?token_relatorio=" +
        localStorage.getItem("token_relatorios") +
        "&tipo_visita=" +
        this.state.tipoVisita +
        "&orientacao_papel=" +
        this.state.orintacaoPapel +
        "&acao=visualizar"
    );
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

    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px"
    };

    const { disabled, tipoVisita, orintacaoPapel } = this.state;

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
          <Row gutter={8}>
            <Col span={24}>
              <Divider orientation="left">Orientação do papel</Divider>
              <Radio.Group
                onChange={this.onChangeOrientacaoPapel}
                value={orintacaoPapel}
              >
                <Radio style={radioStyle} value="portrait">
                  Vertical
                </Radio>
                <Radio style={radioStyle} value="landscape" disabled={disabled}>
                  Horizontal
                </Radio>
              </Radio.Group>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={24}>
              <Divider orientation="left">
                Escolha o tipo de visita para realizar ações no relatório
              </Divider>
              <Radio.Group onChange={this.onChange} value={tipoVisita}>
                <Radio style={radioStyle} value="apiario">
                  Visitas nos apiarios
                </Radio>
                <Radio style={radioStyle} value="colmeia">
                  Visitas nas colmeias
                </Radio>
              </Radio.Group>

              <Divider orientation="left">Escolha uma das opções</Divider>

              <div style={{ marginTop: 20 }}>
                <Row gutter={8}>
                  <Col span={2}>
                    <Button
                      type="primary"
                      icon="eye"
                      onClick={this.handleVisualizar}
                    >
                      Visualizar
                    </Button>
                  </Col>
                  <Col span={2}>
                    <Button
                      type="primary"
                      icon="download"
                      onClick={this.handleDownload}
                    >
                      Download
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Layout.Content>
    );
  }
}

export default RelatorioVisitas;

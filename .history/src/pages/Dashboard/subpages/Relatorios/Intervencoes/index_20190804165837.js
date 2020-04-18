import React, { Component } from "react";
import { Row, Layout, Radio, Button, Col, Divider } from "antd";
import BreadcrumbBee from "../../../../../componentes/BreadcrumBee";
import { uris } from "../../../../../assets";

export class RelatorioIntervencao extends Component {
  state = {
    tipo_intervencao: "apiario",
    orintacaoPapel: "portrait",
    situacao: 'is_concludas',
  };

  onChange = e => {
    this.setState({
      tipo_intervencao: e.target.value
    });
  };

  onChangeOrientacaoPapel = e => {
    this.setState({
      orintacaoPapel: e.target.value
    });
  };

  onChangeSituacao = e => {
    this.setState({
        situacao: e.target.value
    });
  };

  handleDownload = () => {
    window.open(
      uris.BASE_URL +
        "tecnico/intervencoes/relatorios?token_relatorio=" +
        localStorage.getItem("token_relatorios") +
        "&situacao=" +
        this.state.tipo_intervencao +
        "&orientacao_papel=" +
        this.state.orintacaoPapel +
        "&acao=download"
    );
  };

  handleVisualizar = () => {
    window.open(
      uris.BASE_URL +
        "tecnico/intervencoes/relatorios?token_relatorio=" +
        localStorage.getItem("token_relatorios") +
        "&tipo_visita=" +
        this.state.tipo_intervencao +
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

    const { disabled, tipo_intervencao, orintacaoPapel, situacao } = this.state;

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
                Escolha o tipo de intervenção para realizar ações no relatório
              </Divider>
              <Radio.Group onChange={this.onChange} value={tipo_intervencao}>
                <Radio style={radioStyle} value="apiario">
                  Intervenção nos apiarios
                </Radio>
                <Radio style={radioStyle} value="colmeia">
                  Intervenção nas colmeias
                </Radio>
              </Radio.Group>






              <Divider orientation="left">
                Escolha a situação da intervenção
              </Divider>
              <Radio.Group onChange={this.onChangeSituacao} value={situacao}>
                <Radio style={radioStyle} value="is_concluidas">
                  Concluidas
                </Radio>
                <Radio style={radioStyle} value="is_nao_concluidas">
                  Não concluidas 
                </Radio>
                <Radio style={radioStyle} value="todas_intervencoes">
                  Todas
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

export default RelatorioIntervencao;

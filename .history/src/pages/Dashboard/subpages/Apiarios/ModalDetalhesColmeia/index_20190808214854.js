import React from "react";
import "antd/dist/antd.css";
import "./styles.css";
import { Modal, Descriptions, Divider, Spin, Row } from "antd";

class ModalDetalhesColmeia extends React.Component {
  state = {
    modalVisible: false
  };

  setModalVisible(modalVisible) {
    this.setState({ modalVisible });
  }

  render() {
    // const { apiario, loadingApiario } = this.props || {};

    return (
      <div>
        <Modal
          title="Detalhes"
          centered
          width={700}
          visible={this.state.modalVisible}
          onOk={() => this.setModalVisible(false)}
          onCancel={() => this.setModalVisible(false)}
        >
          <Row gutter={24}>
            <Col span={8}>
              <CardBee
                urlIcon={apiario}
                title="Quantidade de apiários"
                description={qtd_apiarios || 0 + " Apiários"}
                loading={this.props.loadingHome}
                minWidth={150}
                height={150}
              />
            </Col>
            <Col span={8}>
              <CardBee
                urlIcon={colmeia}
                title="Quantidade de colmeias"
                description={qtd_colmeias || 0 + " Colmeias"}
                loading={this.props.loadingHome}
                minWidth={150}
                height={150}
              />
            </Col>
            <Col span={8}>
              <CardBee
                urlIcon={apicultor}
                title="Quantidade de apicultores"
                description={qtd_apicultores || 0 + " Apicultores"}
                loading={this.props.loadingHome}
                minWidth={150}
                height={150}
              />
            </Col>
          </Row>
          {/* {loadingApiario ? (
            <div style={{ textAlign: "center" }}>
              <Spin />
            </div>
          ) : (
            <Row>
              <Divider orientation="left" style={{ color: "black" }}>
                Informações básicas do apiário
              </Divider>

              <Descriptions title="" layout="vertical" bordered>
                <Descriptions.Item label="Nome">
                  {apiario.nome}
                </Descriptions.Item>
                <Descriptions.Item label="Descrição">
                  {apiario.descricao}
                </Descriptions.Item>
                <Descriptions.Item label="Quantidade de colmeias">
                  {apiario.qtd_Colmeias}
                </Descriptions.Item>
                <Descriptions.Item label="Data de criação">
                  {apiario.created_at}
                </Descriptions.Item>
                <Descriptions.Item label="Endereço" color="red">
                  <span>{apiario.endereco && apiario.endereco.logradouro}</span>
                  <span>, {apiario.endereco && apiario.endereco.cidade.nome}
                  </span>
                  <span>
                    {" "}
                    - {apiario.endereco && apiario.endereco.cidade.uf}
                  </span>
                </Descriptions.Item>
              </Descriptions>

              <Divider orientation="left" style={{ color: "black" }}>
                Dados do apicultor
              </Divider>

              <Descriptions title="" layout="vertical" bordered>
                <Descriptions.Item label="Nome">
                  {apiario.apicultor && apiario.apicultor.name}
                </Descriptions.Item>
                <Descriptions.Item label="Email">
                  {apiario.apicultor && apiario.apicultor.email}
                </Descriptions.Item>
                <Descriptions.Item label="Telefone">
                  {apiario.apicultor && apiario.apicultor.telefone}
                </Descriptions.Item>
              </Descriptions>
            </Row>
          )} */}
        </Modal>
      </div>
    );
  }
}

export default ModalDetalhesColmeia;

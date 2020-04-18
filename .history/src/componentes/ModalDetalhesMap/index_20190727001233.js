import React from "react";
import "antd/dist/antd.css";
import "./styles.css";
import { Modal, Descriptions, Divider, Spin, Row } from "antd";
import LoadingBee from "../LoadingBee";

class ModalDetalhesMap extends React.Component {
  state = {
    modalVisible: false
  };

  setModalVisible(modalVisible) {
    this.setState({ modalVisible });
  }

  render() {
    const { apiario, loadingApiario } = this.props || null;

    // console.log("====================================");
    // console.log("Apicultor: ", apiario.apicultor.id);
    // console.log("====================================");

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
          {loadingApiario ? (
            <div style={{ textAlign: "center" }}>
              <Spin />
            </div>
          ) : (
            <Row>
              <Divider orientation="left" style={{ color: "black" }}>
                Informações básicas do apiário
              </Divider>

              <Descriptions title="" layout="vertical" style={{ color: "red" }}>
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
              </Descriptions>

              <Divider orientation="left" style={{ color: "black" }}>
                Dados do apicultor
              </Divider>

              <Descriptions title="" layout="vertical">
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
          )}
        </Modal>
      </div>
    );
  }
}

export default ModalDetalhesMap;

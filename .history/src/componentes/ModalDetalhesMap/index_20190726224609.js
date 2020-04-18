import React from "react";
import "antd/dist/antd.css";
import "./styles.css";
import { Modal, Descriptions, Divider } from "antd";
import LoadingBee from "../LoadingBee";

class ModalDetalhesMap extends React.Component {
  state = {
    modalVisible: false
  };

  setModalVisible(modalVisible) {
    this.setState({ modalVisible });
  }

  render() {
    const apiario = this.props.apiario;

    // console.log('====================================');
    // console.log(apiario.apicultor.name);
    // console.log('====================================');

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
          <LoadingBee spinning={this.props.loadingApiario}/>
          <Divider orientation="left" style={{ color: "black" }}>
            Informações básicas do apiário
          </Divider>

          <Descriptions title="" layout="vertical" style={{ color: "red" }}>
            <Descriptions.Item label="Nome">{apiario.nome}</Descriptions.Item>
            <Descriptions.Item label="Descrição">
              {apiario.descricao}
            </Descriptions.Item>
            <Descriptions.Item label="Quantidade de colmeias">
              {apiario.qtdColmeias}
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
              {/* {apiario.apicultor.name} */}
            </Descriptions.Item>
            <Descriptions.Item label="Email">
              {/* {apiario.apicultor.email} */}
            </Descriptions.Item>
            <Descriptions.Item label="Telefone">
              {/* {apiario.apicultor.telefone} */}
            </Descriptions.Item>
          </Descriptions>
        </Modal>
      </div>
    );
  }
}

export default ModalDetalhesMap;

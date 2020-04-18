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
    const { apiario, loadingApiario } = this.props || {};

    console.log("====================================");
    console.log("Apicultor: ", apiario.apicultor.id);
    console.log("====================================");

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
         */}
        </Modal>
      </div>
    );
  }
}

export default ModalDetalhesMap;

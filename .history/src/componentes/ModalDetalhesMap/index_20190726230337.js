import React from "react";
import "antd/dist/antd.css";
import "./styles.css";
import { Modal, Descriptions, Divider, Spin } from "antd";
import LoadingBee from "../LoadingBee";

class ModalDetalhesMap extends React.Component {
  state = {
    modalVisible: false
  };

  setModalVisible(modalVisible) {
    this.setState({ modalVisible });
  }

  render() {
    //const apiario = this.props.apiario;

    console.log('====================================');
    console.log('API', this.props);
    console.log('====================================');

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
          {this.props.loadingApiario ? (
            <Spin size="large" loading={true} />
          ) : (
            <Divider orientation="left" style={{ color: "black" }}>
              Informações básicas do apiário
            </Divider>
          )}
        </Modal>
      </div>
    );
  }
}

export default ModalDetalhesMap;

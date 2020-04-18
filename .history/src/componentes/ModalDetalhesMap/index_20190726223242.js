import React from "react";
import "antd/dist/antd.css";
import "./styles.css";
import { Modal, Descriptions, Divider } from "antd";

class ModalDetalhesMap extends React.Component {
  state = {
    modalVisible: false
  };

  setModalVisible(modalVisible) {
    this.setState({ modalVisible });
  }

  render() {

    console.log('====================================');
    console.log('Detalhes: ', this.props);
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
          <Divider orientation="left" style={{ color: "black" }}>
            Informações básicas do apiário
          </Divider>

        </Modal>
      </div>
    );
  }
}

export default ModalDetalhesMap;

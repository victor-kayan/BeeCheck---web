import React from "react";
import "antd/dist/antd.css";
import { Modal, Divider, Row, Button } from "antd";

class ModalOpcoes extends React.Component {
  state = {
    modalVisible: false
  };

  setModalVisible(modalVisible) {
    this.setState({ modalVisible });
  }

  render() {
    return (
      <div>
        <Modal
          title="Opções"
          centered
          width={700}
          visible={this.state.modalVisible}
          onOk={() => this.setModalVisible(false)}
          onCancel={() => this.setModalVisible(false)}
        >
          <Row>
            <Divider orientation="left" style={{ color: "black" }}>
              Opções
            </Divider>

            <Button>Novo</Button>
            <Button>Editar</Button>
            <Button>Remover</Button>
          </Row>
        </Modal>
      </div>
    );
  }
}

export default ModalOpcoes;

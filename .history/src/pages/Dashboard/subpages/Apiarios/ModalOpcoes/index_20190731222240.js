import React from "react";
import "antd/dist/antd.css";
import "./styles.css";
import { Modal, Descriptions, Divider, Spin, Row, Button } from "antd";

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

              <Button>Novo</Button>
              <Button>Editar</Button>
              <Button>Remover</Button>
            </Row>
          )}
        </Modal>
      </div>
    );
  }
}

export default ModalOpcoes;

import React from "react";
import "antd/dist/antd.css";
import { Modal, Divider, Row, Button, Col, Popconfirm } from "antd";

class ModalOpcoes extends React.Component {
  state = {
    modalVisible: false,
    apiarioId: null
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
          width={500}
          visible={this.state.modalVisible}
          onCancel={() => this.setModalVisible(false)}
          footer={null}
        >
          <Row gutter={24}>
            <Col span={8}>
              <Button
                icon="eye"
                type="primary"
                onClick={this.props.openModalDetalhes}
              >
                Detalhar
              </Button>
            </Col>
            <Col span={8}>
              <Button icon="edit" type="primary" onClick={this.props.openModalApiario}>
                Editar
              </Button>
            </Col>
            <Col span={8}>
              <Button icon="edit" type="primary" onClick={this.props.openModalApiario}>
                Editar
              </Button>
            </Col>
           
          </Row>
        </Modal>
      </div>
    );
  }
}

export default ModalOpcoes;

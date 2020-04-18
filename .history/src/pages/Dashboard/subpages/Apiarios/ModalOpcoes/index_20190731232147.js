import React from "react";
import "antd/dist/antd.css";
import { Modal, Divider, Row, Button, Col } from "antd";

class ModalOpcoes extends React.Component {
  state = {
    modalVisible: false,
    apiarioId: null
  };

  setModalVisible(modalVisible) {
    this.setState({ modalVisible });
  }

  handleDetalhes = () => {
    this.props.openModalDetalhes();
  };

  render() {
    return (
      <div>
        <Modal
          title="Opções"
          centered
          width={400}
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
              <Button icon="edit" type="primary">
                Editar
              </Button>
            </Col>
            <Col span={8}>
              <Popconfirm
                title="Deletar apicultor?"
                okText="Sim"
                cancelText="Cancelar"
                onConfirm={() => this.handleDelete(record.id)}
              >
                <Button icon="delete" type="primary">
                  Remover
                </Button>
              </Popconfirm>
            </Col>
          </Row>
        </Modal>
      </div>
    );
  }
}

export default ModalOpcoes;

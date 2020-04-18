import React from "react";
import "antd/dist/antd.css";
import { Modal, Row, Button, Col, Popconfirm } from "antd";
import ButtonGroup from "antd/lib/button/button-group";

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
          width={400}
          visible={this.state.modalVisible}
          onCancel={() => this.setModalVisible(false)}
          footer={null}
        >
          <Row gutter={8}>

          <ButtonGroup>
      <Button type="primary">
        <Icon type="left" />
        Go back
      </Button>
      <Button type="primary">
        Go forward
        <Icon type="right" />
      </Button>
    </ButtonGroup>

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
              <Button
                icon="edit"
                type="primary"
                onClick={this.props.openModalApiario}
              >
                Editar
              </Button>
            </Col>
            <Col span={8}>
              <Popconfirm
                title="Deletar apiário?"
                okText="Sim"
                cancelText="Cancelar"
                onConfirm={this.props.handleDelete}
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

import React from "react";
import "antd/dist/antd.css";
import { Modal, Button, notification, Icon } from "antd";

import FormApiario from "../ModalApiario/FormApiario";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { saveApiario } from "../../../../../redux/actions/apiarioActions";
import { getAllapicultor } from "../../../../../redux/actions/apicultorActions";
import { colors } from "../../../../../assets";

class ModalApiario extends React.Component {
  state = {
    modalVisible: false,
    clicouButtonSave: false
  };

  componentDidMount = () => {
    this.props.getAllapicultor();
  };

  setModalVisible = modalVisible => {
    this.setState({ modalVisible });
  };

  handleCancel = () => {
    this.props.onCloseModal();
  };

  componentWillReceiveProps = nextProps => {
    if (this.state.clicouButtonSave) {
      if (nextProps.code === 201) {
        this.setState({ clicouButtonSave: false });
        notification.open({
          message: "Operação realizado com sucesso",
          description: nextProps.messageApiario,
          icon: <Icon type="smile" style={{ color: colors.COR_PRYMARY }} />
        });
        this.props.onCloseModal();
      } else
        notification.open({
          message: "Falha ao realizar essa operaçãoo",
          description: nextProps.messageApiario,
          icon: (
            <Icon
              type="smile"
              rotate={180}
              style={{ color: colors.COR_RED_ERROR }}
            />
          )
        });
      this.setState({ clicouButtonSave: false });
    }
  };

  handleSubmit = () => {
    this.refs.formApiario.validateFields((erro, values) => {
      this.setState({ clicouButtonSave: true });
      if (!erro) {
        this.props.saveApiario({
          nome: values.nome,
          descricao: values.descricao,
          latitude: (this.props.latitude && this.props.latitude) || null,
          longitude: (this.props.longitude && this.props.longitude) || null,
          apicultor_id: values.apicultor_id,
          logradouro: values.logradouro,
        });
      }
    });
  };

  render() {
    const { visible, list_apicultor, loadingApiario } = this.props;

    return (
      <div>
        <Modal
          title="Novo apiário"
          centered
          width={800}
          visible={visible}
          onCancel={this.handleCancel}
          destroyOnClose
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Cancelar
            </Button>,
            <Button
              key="submit"
              type="primary"
              loading={loadingApiario}
              onClick={this.handleSubmit}
            >
              Salvar
            </Button>
          ]}
          style={{ paddingLeft: "24px", paddingRight: "24px" }}
        >
          <FormApiario ref="formApiario" apicultores={list_apicultor} />
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    list_apicultor: state.apicultorState.list_apicultor,
    loadingApiario: state.apiarioState.loadingApiario,
    code: state.apiarioState.code,
    messageApiario: state.apiarioState.messageApiario
    // loadingCidade: state.apicultorState.loadingCidade,
    // code: state.apicultorState.code,
    // message_apicultor: state.apicultorState.message_apicultor
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveApiario, getAllapicultor }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { forwardRef: true }
)(ModalApiario);

import React from "react";
import { Modal, Button, Form, Icon, notification } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  saveApicultor,
  updateApicultor
} from "../../../../../redux/actions/apicultorActions";
import { getCidadesByUf } from "../../../../../redux/actions/cidadeActions";
import FormVisitaApiario from "./FormVisitaApiario";
import { colors } from "../../../../../assets";

class ModalApicultor extends React.Component {
  state = {
    visible: false,
    message: "",
    clicouButtonSave: false,
  };

  componentWillReceiveProps(nextProps) {
    if (this.state.clicouButtonSave) {
      if (nextProps.code === 201 || nextProps.code === 200) {
        notification.open({
          message: "Operação realizada com sucesso",
          description: nextProps.message_apicultor,
          icon: <Icon type="smile" style={{ color: colors.COR_PRYMARY }} />
        });

        this.props.onCancel();
      } else {
        notification.open({
          message: "Falha ao realizar essa operação",
          description: nextProps.message_apicultor,
          icon: (
            <Icon
              type="smile"
              rotate={180}
              style={{ color: colors.COR_RED_ERROR }}
            />
          )
        });
      }
      this.setState({ clicouButtonSave: false });
    }
  }

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleSubmit = () => {
    this.refs.formVisitaApiario.validateFields((err, values) => {
      if (!err) {
          alert(this.state.visitaId)
        // if (this.props.edicao) {
        //   this.setState({ clicouButtonSave: true });
        //   this.props.updateApicultor({
        //     id: this.props.apicultor.id,
        //     request: values
        //   });
        // } else {
        //   this.setState({ clicouButtonSave: true });
        //   this.props.saveApicultor({
        //     name: values.name,
        //     email: values.email,
        //     telefone: values.telefone,
        //     cidade_id: values.cidade_id,
        //     estado: values.estado,
        //     logradouro: values.logradouro,
        //     password: values.password,
        //     password_confirmation: values.password_confirmation
        //   });
        // }
      }
    });
  };

  render() {
    const { visible, onClose, apiarioId } = this.props;

    console.log('====================================');
    console.log(apiarioId);
    console.log('====================================');
    return (
      <Modal
        ref="openModal"
        visible={visible}
        width={500}
        title={"Cadastrar intervenção"}
        onCancel={onClose}
        destroyOnClose
        auto
        footer={[
          <Button key="back" onClick={onClose}>
            Cancelar
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={this.props.loading}
            onClick={this.handleSubmit}
          >
            Salvar Intervenção
          </Button>
        ]}
        style={{ paddingLeft: "24px", paddingRight: "24px" }}
      >
        <FormVisitaApiario ref="formVisitaApiario" />
      </Modal>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: "register" })(
  ModalApicultor
);

function mapStateToProps(state, props) {
  return {
    list_cidades: state.cidadeState.list_cidades,
    loading: state.apicultorState.loading,
    loadingCidade: state.apicultorState.loadingCidade,
    code: state.apicultorState.code,
    message_apicultor: state.apicultorState.message_apicultor
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { saveApicultor, getCidadesByUf, updateApicultor },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { forwardRef: true }
)(WrappedRegistrationForm);

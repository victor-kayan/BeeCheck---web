import React from "react";
import { Modal, Button, Form, Icon, notification } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { saveIntervencaoApiario } from "../../../../../redux/actions/visitasApiarioActions";
import FormVisitaApiario from "./FormVisitaApiario";
import { colors } from "../../../../../assets";

class ModalApicultor extends React.Component {
  state = {
    visible: false,
    message: "",
    clicouButtonSave: false
  };

  componentWillReceiveProps(nextProps) {
    if (this.state.clicouButtonSave) {
      console.log("====================================");
      console.log(nextProps);
      console.log("====================================");
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
        this.setState({ clicouButtonSave: true });
        this.props.saveIntervencaoApiario({
          descricao: values.descricao,
          data_inicio: values.data_inicio,
          data_fim: values.data_fim,
          apiario_id: this.props.apiarioId
        });
      }
    });
  };

  render() {
    const { visible, onClose } = this.props;

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
    visitasApiarios: state.visitaApiarioState.visitasApiarios,
    loadingVisita: state.visitaApiarioState.loadingVisita,
    code: state.visitaApiarioState.code
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveIntervencaoApiario }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { forwardRef: true }
)(WrappedRegistrationForm);

import React from "react";
import { Modal, Button, Form, Icon, notification, Input, Row } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { colors } from "../../../../../assets";

class ModalIntervir extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    visible: false,
    message: "",
    clicouButtonSave: false,
    typeAlert: ""
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  componentDidMount = () => {
    this.props.getCidadesByUf("AC");
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
    this.refs.formApicultor.validateFields((err, values) => {
      if (!err) {
        if (this.props.edicao) {
          this.setState({ clicouButtonSave: true });
          this.props.updateApicultor({
            id: this.props.apicultor.id,
            request: values
          });
        } else {
          this.setState({ clicouButtonSave: true });
          this.props.saveApicultor({
            name: values.name,
            email: values.email,
            telefone: values.telefone,
            cidade_id: values.cidade_id,
            estado: values.estado,
            logradouro: values.logradouro,
            password: values.password,
            password_confirmation: values.password_confirmation
          });
        }
      }
    });
  };

  onChangeSelectEstado = uf => {
    this.props.getCidadesByUf(uf);
  };

  onChange = value => {
    this.props.getCidadesByUf(value);
  };

  open = () => {
    this.refs.openModal.open();
  };

  render() {
    const { visible, onClose } = this.props;
    const { TextArea } = Input;

    return (
      <Modal
        ref="openModal"
        iconType="user"
        visible={visible}
        width={800}
        title="Realizar intervenção"
        onOk={() => this.setModalVisible(false)}
        onCancel={this.props.onCancel}
        destroyOnClose
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
        <Row gutter={8}>
          <Col span={24}>
            <TextArea rows={4} />
          </Col>
        </Row>
      </Modal>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: "register" })(
  ModalIntervir
);

function mapStateToProps(state, props) {
  return {
    // list_cidades: state.cidadeState.list_cidades,
    // loading: state.apicultorState.loading,
    // loadingCidade: state.apicultorState.loadingCidade,
    // code: state.apicultorState.code,
    // message_apicultor: state.apicultorState.message_apicultor
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {  },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { forwardRef: true }
)(WrappedRegistrationForm);

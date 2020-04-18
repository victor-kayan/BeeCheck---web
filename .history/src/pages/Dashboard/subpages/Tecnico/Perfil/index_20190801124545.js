import React, { Component } from "react";
import {
  Col,
  Row,
  Layout,
  Form,
  Input,
  Icon,
  Divider,
  Button,
  Spin,
  notification,
  Upload,
  message,
  Tabs
} from "antd";
import BreadcrumbBee from "../../../../../componentes/BreadcrumBee";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getPerfil,
  updatePerfil
} from "../../../../../redux/actions/tecnicoActions";
import "./styles.css";
import { colors } from "../../../../../assets";

class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userPerfil: {},
      isClicouButtonUpate: false
    };
  }

  componentDidMount = () => {
    this.props.getPerfil();
  };

  componentWillReceiveProps = nextProps => {
    if (this.state.isClicouButtonUpate) {
      if (nextProps && nextProps.code === 200) {
        notification.open({
          message: "Operação realizado com sucesso",
          description: nextProps.messagePerfil,
          icon: <Icon type="smile" style={{ color: colors.COR_PRYMARY }} />
        });
      } else if (nextProps && nextProps.code === 422) {
        notification.open({
          message: "Falha ao realizar essa operação",
          description: nextProps.messagePerfil,
          icon: (
            <Icon
              type="smile"
              rotate={180}
              style={{ color: colors.COR_RED_ERROR }}
            />
          )
        });
      }
      this.setState({ isClicouButtonUpate: false });
    }
  };

  handleSubmit = () => {
    this.props.form.validateFields((err, values) => {
      console.log("====================================");
      console.log("Props com upload: ", values);
      console.log("====================================");
      if (!err) {
        this.setState({ isClicouButtonUpate: true });
        this.props.updatePerfil({
          request: values
        });
      }
    });
  };

  render() {
    const mapa = [
      {
        key: "/",
        name: "Home",
        icon: "home"
      },
      {
        key: "perfil",
        name: "Perfil",
        icon: "user"
      }
    ];

    const { getFieldDecorator } = this.props.form;
    const { loadingPerfil, userPerfil, loadingUpdatePerfil } =
      this.props || null;
    const { TabPane } = Tabs;

    const props = {
      name: "file",
      action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
      headers: {
        authorization: "authorization-text"
      }
      // onChange(info) {
      //   if (info.file.status !== "uploading") {
      //     console.log(info.file, info.fileList);
      //   }
      //   if (info.file.status === "done") {
      //     message.success(`${info.file.name} file uploaded successfully`);
      //   } else if (info.file.status === "error") {
      //     message.error(`${info.file.name} file upload failed.`);
      //   }
      // }
    };

    return (
      <Layout.Content style={{ margin: "0 16px" }}>
        <BreadcrumbBee mapa={mapa} />

        <div
          style={{
            padding: 24,
            margin: 10,
            background: "#fff",
            minHeight: 360,
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)"
          }}
        >
          <Row>
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex"
              }}
            >
              {loadingPerfil ? (
                <div
                  style={{
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 150
                  }}
                >
                  <Spin size="large" />
                </div>
              ) : (
                <Col span={15}>
                  <div style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)" }}>
                    <div className="editarDadosPessoais">
                      <img
                        src={userPerfil.foto}
                        className="fotoPerfilEditar"
                        alt={"Perfil"}
                      />

                      <h3 className={"pendenciaEmailTelefone"} />
                    </div>

                    <div
                      style={{
                        padding: 24,
                        margin: 10,
                        background: "#fff",
                        minHeight: 360,
                        borderColor: "#000",
                        borderWidth: 1
                      }}
                    >
                      <Tabs>
                        <TabPane tab="Dados básicos" key="1">
                          <Form style={{ padding: "2vh" }}>
                            <Divider orientation="left">
                              Dados básicos do apicultor
                            </Divider>

                            <div className="formStyle">
                              <Row gutter={24}>
                                <Col span={12}>
                                  <Form.Item label="Nome">
                                    {getFieldDecorator("name", {
                                      initialValue: userPerfil.name || "",
                                      rules: [
                                        {
                                          required: true,
                                          message: "Por favor informe um nome!"
                                        },
                                        {
                                          validator: this.compareToFirstPassword
                                        }
                                      ]
                                    })(
                                      <Input
                                        prefix={
                                          <Icon
                                            type="user"
                                            style={{ color: "rgba(0,0,0,.25)" }}
                                          />
                                        }
                                        onBlur={this.handleConfirmBlur}
                                        type="text"
                                        placeholder="Endereço"
                                      />
                                    )}
                                  </Form.Item>
                                </Col>

                                <Col span={12}>
                                  <Form.Item label="Email">
                                    {getFieldDecorator("email", {
                                      initialValue: userPerfil.email || "",
                                      rules: [
                                        {
                                          required: true,
                                          message:
                                            "Por favor informe seu email!"
                                        },
                                        {
                                          validator: this.compareToFirstPassword
                                        }
                                      ]
                                    })(
                                      <Input
                                        prefix={
                                          <Icon
                                            type="mail"
                                            style={{ color: "rgba(0,0,0,.25)" }}
                                          />
                                        }
                                        onBlur={this.handleConfirmBlur}
                                        type="text"
                                        placeholder="Endereço"
                                      />
                                    )}
                                  </Form.Item>
                                </Col>
                              </Row>

                              <Row>
                                <Col span={12}>
                                  <Form.Item label="Telefone">
                                    {getFieldDecorator("phone", {
                                      initialValue: userPerfil.email || "",
                                      rules: [
                                        {
                                          required: true,
                                          message:
                                            "Por favor informe seu telefone!"
                                        },
                                        {
                                          validator: this.compareToFirstPassword
                                        }
                                      ]
                                    })(
                                      <Input
                                        prefix={
                                          <Icon
                                            type="mail"
                                            style={{ color: "rgba(0,0,0,.25)" }}
                                          />
                                        }
                                        onBlur={this.handleConfirmBlur}
                                        type="text"
                                        placeholder="Endereço"
                                      />
                                    )}
                                  </Form.Item>
                                </Col>
                              </Row>
                            </div>

                            <Row gutter={8}>
                              <div className="buttonsAction">
                                <Button
                                  key="submit"
                                  type="primary"
                                  loading={loadingUpdatePerfil}
                                  onClick={this.handleSubmit}
                                >
                                  Salvar alterações
                                </Button>
                              </div>
                            </Row>
                          </Form>
                        </TabPane>

                        <TabPane tab="Senha" key="2">
                          <Form style={{ padding: "2vh" }}>
                            <Divider orientation="left">
                              Dados básicos do apicultor
                            </Divider>
                            <div className="formStyle">
                              <Row gutter={8}>
                                <Col span={12}>
                                  <Form.Item label="Insira uma senha">
                                    {getFieldDecorator("password", {
                                      rules: [
                                        {
                                          min: 5,
                                          message:
                                            "A senha tem que ter no minímo 5 caracteres!"
                                        },
                                        {
                                          max: 20,
                                          message:
                                            "A senha tem que ter no máximo 20 caracteres!"
                                        }
                                      ]
                                    })(
                                      <Input
                                        prefix={
                                          <Icon
                                            type="lock"
                                            style={{ color: "rgba(0,0,0,.25)" }}
                                          />
                                        }
                                        type="password"
                                        placeholder="Senha"
                                      />
                                    )}
                                  </Form.Item>
                                </Col>
                                <Col span={12}>
                                  <Form.Item label="Confirme a senha">
                                    {getFieldDecorator(
                                      "password_confirmation",
                                      {
                                        rules: [
                                          {
                                            min: 5,
                                            message:
                                              "A senha tem que ter no minímo 5 caracteres!"
                                          },
                                          {
                                            max: 20,
                                            message:
                                              "A senha tem que ter no máximo 20 caracteres!"
                                          },
                                          {
                                            validator: this
                                              .compareToFirstPassword
                                          }
                                        ]
                                      }
                                    )(
                                      <Input
                                        prefix={
                                          <Icon
                                            type="lock"
                                            style={{ color: "rgba(0,0,0,.25)" }}
                                          />
                                        }
                                        type="password"
                                        placeholder="Confirmar senha"
                                      />
                                    )}
                                  </Form.Item>
                                </Col>
                                <Col span={12}>
                                  <Form.Item label="Insira uma senha">
                                    {getFieldDecorator("foto", {})(
                                      <Upload {...props} name="foto">
                                        <Button>
                                          <Icon type="upload" /> Selecione uma
                                          foto
                                        </Button>
                                      </Upload>
                                    )}
                                  </Form.Item>
                                </Col>
                              </Row>
                            </div>

                            <Row gutter={8}>
                              <div className="buttonsAction">
                                <Button
                                  key="submit"
                                  type="primary"
                                  loading={loadingUpdatePerfil}
                                  onClick={this.handleSubmit}
                                >
                                  Salvar alterações
                                </Button>
                              </div>
                            </Row>
                          </Form>
                        </TabPane>
                      </Tabs>
                      ,
                    </div>
                  </div>
                </Col>
              )}
            </div>
          </Row>
        </div>
      </Layout.Content>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(Perfil);

function mapStateToProps(state, props) {
  return {
    userPerfil: state.tecnicoState.userPerfil,
    loadingPerfil: state.tecnicoState.loadingPerfil,
    loadingUpdatePerfil: state.tecnicoState.loadingUpdatePerfil,
    messagePerfil: state.tecnicoState.messagePerfil,
    code: state.tecnicoState.code
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPerfil, updatePerfil }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedNormalLoginForm);

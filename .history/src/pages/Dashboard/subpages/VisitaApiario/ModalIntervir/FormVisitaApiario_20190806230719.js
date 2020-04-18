import React from "react";
import { Form, Input, Icon, Divider, Row, Col, Select, DatePicker } from "antd";
import MaskedInput from "antd-mask-input";
import Patterns from "../../../../../assets/patterns";

class FormVisitaApiario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChangeSelectEstado = uf => {
    this.props.handleChangeSelectEstado(uf);
    this.props.form.setFieldsValue({
      cidade_id: null
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const cidades = this.props.listCidades || [];
    const { apicultor } = this.props || [];
    const { Option } = Select;

    return (
      <Row gutter={8}>
        <Form onSubmit={this.handleSubmit}>
          <Row gutter={8}>
            <Col span={24}>
              <Form.Item label="Descreva o que deve ser realizado na intervenção">
                {getFieldDecorator("descricao", {
                  rules: [
                    {
                      required: true,
                      message: "Por favor informe uma iternvenção"
                    },
                    {
                      min: 5,
                      message: "O campo tem que ter no minímo 5 caracteres"
                    },
                    {
                      max: 50,
                      message: "O campo tem que ter no máximo 100 caracteres"
                    }
                  ]
                })(<TextArea rows={2} placeholder="Desscrição" />)}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item label="Data Início">
                {getFieldDecorator("data_inicio", {
                  rules: [
                    {
                      required: true,
                      message: "Por favor informe uma data"
                    }
                  ]
                })(
                  <DatePicker
                    onChange={this.onChangeDate}
                    placeholder="Data Início"
                  />
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Data Final">
                {getFieldDecorator("data_fim", {
                  rules: [
                    {
                      required: true,
                      message: "Por favor informe uma data"
                    }
                  ]
                })(
                  <DatePicker
                    onChange={this.onChangeDate}
                    placeholder="Data Fim"
                  />
                )}
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Row>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  FormVisitaApiario
);

export default WrappedNormalLoginForm;

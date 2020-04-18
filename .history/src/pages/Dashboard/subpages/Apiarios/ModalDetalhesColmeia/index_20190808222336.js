import React from "react";
import "antd/dist/antd.css";
import "./styles.css";
import {
  Modal,
  Descriptions,
  Divider,
  Spin,
  Row,
  Col,
  Card,
  Icon,
  Avatar
} from "antd";
import CardBee from "../../../../../componentes/CardBee";
import apiario from "../../../../../images/bee-hive.png";

class ModalDetalhesColmeia extends React.Component {
  state = {
    modalVisible: false
  };

  setModalVisible(modalVisible) {
    this.setState({ modalVisible });
  }

  render() {
    // const { apiario, loadingApiario } = this.props || {};
    const { Meta } = Card;

    return (
      <div>
        <Modal
          title="Detalhes das colmeias do apiário"
          centered
          width={900}
          visible={this.state.modalVisible}
          onOk={() => this.setModalVisible(false)}
          onCancel={() => this.setModalVisible(false)}
        >
          <Row gutter={24}>
            <Col span={8}>
              <Card
                style={{ height: 150 }}
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
              >
                <Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title="Card title"
                  description="This is the description"
                />
              </Card>
            </Col>
            <Col span={8}>
              <Card
                style={{ height: 150 }}
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
              >
                <Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title="Card title"
                  description="This is the description"
                />
              </Card>
            </Col>
            <Col span={8}>
              <Card
                style={{ height: 150 }}
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
              >
                <Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title="Card title"
                  description="This is the description"
                />
              </Card>
            </Col>
          </Row>

          <Divider>

          {/* {loadingApiario ? (
            <div style={{ textAlign: "center" }}>
              <Spin />
            </div>
          ) : (
            <Row>
              <Divider orientation="left" style={{ color: "black" }}>
                Informações básicas do apiário
              </Divider>

              <Descriptions title="" layout="vertical" bordered>
                <Descriptions.Item label="Nome">
                  {apiario.nome}
                </Descriptions.Item>
                <Descriptions.Item label="Descrição">
                  {apiario.descricao}
                </Descriptions.Item>
                <Descriptions.Item label="Quantidade de colmeias">
                  {apiario.qtd_Colmeias}
                </Descriptions.Item>
                <Descriptions.Item label="Data de criação">
                  {apiario.created_at}
                </Descriptions.Item>
                <Descriptions.Item label="Endereço" color="red">
                  <span>{apiario.endereco && apiario.endereco.logradouro}</span>
                  <span>, {apiario.endereco && apiario.endereco.cidade.nome}
                  </span>
                  <span>
                    {" "}
                    - {apiario.endereco && apiario.endereco.cidade.uf}
                  </span>
                </Descriptions.Item>
              </Descriptions>

              <Divider orientation="left" style={{ color: "black" }}>
                Dados do apicultor
              </Divider>

              <Descriptions title="" layout="vertical" bordered>
                <Descriptions.Item label="Nome">
                  {apiario.apicultor && apiario.apicultor.name}
                </Descriptions.Item>
                <Descriptions.Item label="Email">
                  {apiario.apicultor && apiario.apicultor.email}
                </Descriptions.Item>
                <Descriptions.Item label="Telefone">
                  {apiario.apicultor && apiario.apicultor.telefone}
                </Descriptions.Item>
              </Descriptions>
            </Row>
          )} */}
        </Modal>
      </div>
    );
  }
}

export default ModalDetalhesColmeia;

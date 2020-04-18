import React from "react";
import "antd/dist/antd.css";
import "./styles.css";
import { Modal, Row, Col, Card, Avatar } from "antd";
const colmeiaIcon = require("../../../../../images/honeycomb.png");

class ModalDetalhesColmeia extends React.Component {
  state = {
    modalVisible: false
  };

  setModalVisible(modalVisible) {
    this.setState({ modalVisible });
  }

  render() {
    const { colmeias, loadingColmeia } = this.props || [];
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
            {colmeias &&
              colmeias.map(colmeia => (
                <Col span={8} key={colmeia.id}>
                  <Card
                    loading={loadingColmeia}
                    style={{ height: 150 }}
                    cover={<Avatar src={colmeiaIcon} size="small" />}
                  >
                    <Meta
                      avatar={
                        <Avatar
                          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                          size="small"
                        />
                      }
                      title={colmeia.nome}
                      description={colmeia.descricao}
                    />
                  </Card>
                </Col>
              ))}
          </Row>
          <br />
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

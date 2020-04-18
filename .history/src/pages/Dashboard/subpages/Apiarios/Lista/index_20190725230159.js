import React from "react";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllapiarios } from "../../../../../redux/actions/apiarioActions/";
import { Table, Button, Layout, Tag, Popconfirm, Row, Col } from "antd";
import BreadcrumBee from "../../../../../componentes/BreadcrumBee";
import ModalNovoApiario from "../ModalNovoApiario";
import Mapa from "../../../../../componentes/Mapa";

class ListaApiario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      visibleModalEdit: false,
      apicultor: {}
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount = () => {
    this.props.getAllapiarios();
  };

  handleOpenModalEdit = record => {
    if (this.state.visibleModalEdit === true) {
      this.setState({ apicultor: {} });
    } else {
      //this.setState({ apicultor: record, visibleModalEdit: true });
    }
  };

  handleDelete = id => {
    //this.props.deleteApicultor({ id });
  };

  handleOpenModal = () => {
    this.setState({ visible: true });
  };

  render() {
    const apiarios = this.props.list_apiario || [];
    const { visible } = this.state;

    const mapa = [
      {
        key: "home",
        name: "Home",
        icon: "home"
      },
      {
        key: "2",
        name: "Apiarios",
        icon: "bank"
      }
    ];

    return (
      <Layout.Content style={{ margin: "0 16px" }}>
        <BreadcrumBee mapa={mapa} />

        <div
          style={{
            padding: 24,
            margin: 10,
            background: "#fff",
            minHeight: 360,
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)"
          }}
        >
          <Row gutter={24}>
            <Col span={24}>
              <div style={{ marginTop: 30 }}>
                <Mapa height={'700px'} cadastroAbilitado={true}/>
              </div>
            </Col>
          </Row>
        </div>
      </Layout.Content>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    list_apiario: state.apiarioState.list_apiario,
    loading: state.apiarioState.loading,
    code: state.apiarioState.code
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getAllapiarios }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListaApiario);

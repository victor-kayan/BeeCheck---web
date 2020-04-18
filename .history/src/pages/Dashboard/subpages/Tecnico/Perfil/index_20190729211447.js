import React, { Component } from "react";
import { Col, Row, Layout, Form, Input, Icon, Divider, Button } from "antd";
import BreadcrumbBee from "../../../../../componentes/BreadcrumBee";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPerfil } from "../../../../../redux/actions/userActions";
import "./styles.css";

class Perfil extends Component {
  state = {
    userPerfil: {}
  };

  componentDidMount = () => {
    this.props.getPerfil();
  };

  componentWillReceiveProps = nextProps => {
    //this.setState({ user: nextProps.userPerfil });
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

    return (
      <Layout.Content style={{ margin: "0 16px" }}>
        {/*  */}
      </Layout.Content>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    userPerfil: state.userState.userPerfil,
    //loading: state.userState.loading,
    //code: state.userState.code
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPerfil }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Perfil);

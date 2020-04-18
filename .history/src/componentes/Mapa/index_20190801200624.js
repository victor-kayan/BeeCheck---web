import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getAllapiarios,
  detalhesApiario,
  deleteApiario
} from "../../redux/actions/apiarioActions";
import ModalDetalhesMap from "../ModalDetalhesMap";
import ModalApiario from "../../pages/Dashboard/subpages/Apiarios/ModalApiario";
import { uris } from "../../assets";
import MapView from "./MapView";
import ModalOpcoes from "../../pages/Dashboard/subpages/Apiarios/ModalOpcoes";
import { notification } from "antd";

/* global google */
class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      latitude: null,
      longitude: null,
      center: null,
      lat: -6.1123,
      lng: -38.2052,
      endereco: null,
      zoom: 8,
      apiarioId: null
    };

    this.openModalDetalhes = this.openModalDetalhes.bind(this);
  }

  componentDidMount = () => {
    this.props.getAllapiarios();
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.code === 204) {
      notification.open({
        message: "Operação realizado com sucesso",
        description: nextProps.messagePerfil,
        icon: <Icon type="smile" style={{ color: colors.COR_PRYMARY }} />
      });
    }
  };

  handleBoundsChanged = () => {
    this.setState({
      bounds: this._map.getBounds(),
      center: this._map.getCenter()
    });
  };

  handleSearchBoxMounted = searchBox => {
    this._searchBox = searchBox;
  };

  onPlacesChanged = () => {
    const { actions } = this.props;

    const places = this._searchBox.getPlaces();
    const bounds = new google.maps.LatLngBounds();

    places.forEach(place => {
      if (place.geometry.viewport) bounds.union(place.geometry.viewport);
      else bounds.extend(place.geometry.location);
    });
    const nextMarkers = places.map(place => ({
      position: place.geometry.location
    }));

    let lat =
      nextMarkers[0] && nextMarkers[0].position
        ? nextMarkers[0].position.lat()
        : null;
    let lng =
      nextMarkers[0] && nextMarkers[0].position
        ? nextMarkers[0].position.lng()
        : null;

    this.setState({ lat: lat, lng: lng, zoom: 15 });

    // if (lat && lng) {
    //   actions.mapa.setIsDefaultCenter(false);
    //   actions.mapa.setZoom(15);
    //   actions.mapa.setCenter(lat, lng);
    // }
  };

  handleRightClick = event => {
    if (this.props.cadastroAbilitado) {
      this.setState({ visible: true });
    }

    var latitude = event.latLng.lat(),
      longitude = event.latLng.lng();

    this.setState({ latitude: latitude, longitude: longitude });
  };

  handleMarkerClick = apiarioId => {
    if (!this.props.cadastroAbilitado) {
      this.props.detalhesApiario(apiarioId);
      this.refs.opendModalDetalhes.setModalVisible(true);
    } else {
      this.setState({ apiarioId: apiarioId });
      this.refs.opendModalOpcoes.setModalVisible(true, apiarioId);
    }
  };

  openModalDetalhes = () => {
    this.props.detalhesApiario(this.state.apiarioId);
    this.refs.opendModalDetalhes.setModalVisible(true);
  };

  handleDelete = () => {
    this.props.deleteApiario(this.state.apiarioId);
  };

  render() {
    const { visible, latitude, longitude, lat, lng, zoom } = this.state;
    const { height } = this.props || 500;
    const { listApiarios, apiarioDetalhes, loadingApiario } = this.props || [];

    return (
      <div>
        <MapView
          googleMapURL={uris.GOOGLE_MAPS_URI}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: height }} />}
          mapElement={<div style={{ height: `100%` }} />}
          onRightClick={this.handleRightClick}
          onMarkerClick={this.handleMarkerClick}
          onPlacesChanged={this.onPlacesChanged}
          lat={lat}
          lng={lng}
          zoom={zoom}
          //defaultCenter={this.props.positionMap}
          //onBoundsChanged={this.onBoundsChanged}
          bounds={null}
          onSearchBoxMounted={this.handleSearchBoxMounted}
          apiarios={listApiarios}
        />
        <ModalOpcoes
          ref={"opendModalOpcoes"}
          openModalDetalhes={this.openModalDetalhes}
          openModalApiario={() => this.setState({ visible: true })}
          handleDelete={this.handleDelete}
        />
        <ModalDetalhesMap
          ref={"opendModalDetalhes"}
          apiario={apiarioDetalhes}
          loadingApiario={loadingApiario}
        />
        <ModalApiario
          visible={visible}
          latitude={latitude}
          longitude={longitude}
          onCloseModal={() => this.setState({ visible: false })}
        />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    apiario: state.apiarioState.apiario,
    apiarioDetalhes: state.apiarioState.apiarioDetalhes,
    listApiarios: state.apiarioState.listApiarios,
    loadingApiario: state.apiarioState.loadingApiario,
    code: state.apiarioState.code,
    messageApiario: state.apiarioState.messageApiario
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getAllapiarios, detalhesApiario, deleteApiario },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { forwardRef: true }
)(MapContainer);

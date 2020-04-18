import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getAllapiarios,
  detalhesApiario
} from "../../redux/actions/apiarioActions";
import ModalDetalhesMap from "../ModalDetalhesMap";
import ModalApiario from "../../pages/Dashboard/subpages/Apiarios/ModalApiario";
import { uris } from "../../assets";
import MapView from "./MapView";

class MapContainer extends Component {
  state = {
    visible: false,
    latitude: null,
    longitude: null,
    center: null
  };

  componentDidMount = () => {
    this.props.getAllapiarios();
  };

  handleBoundsChanged = () => {
    this.setState({
      bounds: this._map.getBounds(),
      center: this._map.getCenter()
    });
    console.log("hh");
  };

  handleSearchBoxMounted = searchBox => {
    this._searchBox = searchBox;
    console.log("handleSearchBoxMounted");
  };

  handlePlacesChanged = () => {
    const { actions } = this.props;

    const places = this.searchBox.getPlaces();
    //const bounds = new google.maps.LatLngBounds();

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

    console.log('====================================');
    console.log(lat);
    console.log('====================================');

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
    this.props.detalhesApiario(apiarioId);
    this.refs.opendModalDetalhes.setModalVisible(true);
  };

  render() {
    const { visible } = this.state;
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
          onPlacesChanged={this.handlePlacesChanged}
          defaultCenter={this.props.positionMap}
          //onBoundsChanged={this.onBoundsChanged}
          bounds={null}
          onSearchBoxMounted={this.handleSearchBoxMounted}
          apiarios={listApiarios}
        />
        <ModalDetalhesMap
          ref={"opendModalDetalhes"}
          apiario={apiarioDetalhes}
          loadingApiario={loadingApiario}
        />
        <ModalApiario
          visible={visible}
          latitude={this.state.latitude}
          longitude={this.state.longitude}
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
    code: state.apiarioState.code
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getAllapiarios, detalhesApiario }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { forwardRef: true }
)(MapContainer);

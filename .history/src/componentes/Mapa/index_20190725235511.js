import React, { Component } from "react";
import { connect } from "react-redux";
import ModalDetalhesMap from "../ModalDetalhesMap";
import ModalApiario from "../ModalApiario";
import { uris } from "../../assets";
import MapView from "./MapView";

class MapContainer extends Component {
  state = {
    visible: false,
    latitude: null,
    longitude: null
  };

  onBoundsChanged = () => {
    // this.setState({
    //   bounds: refs.map.getBounds(),
    //   center: refs.map.getCenter()
    // });
  };

  onSearchBoxMounted = ref => {
    //refs.searchBox = ref;
  };

  onPlacesChanged = (refs) => {
    //const refs = {};
    const places = refs.searchBox.getPlaces();
    const bounds = new google.maps.LatLngBounds();

    places.forEach(place => {
      if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    const nextMarkers = places.map(place => ({
      position: place.geometry.location
    }));
    const nextCenter = _.get(nextMarkers, "0.position", this.state.center);

    this.setState({
      center: nextCenter,
      markers: nextMarkers
    });
  };

  handleRightClick = event => {
    if (this.props.cadastroAbilitado) {
      this.setState({ visible: true });
    }

    var latitude = event.latLng.lat(),
      longitude = event.latLng.lng();

    this.setState({ latitude: latitude, longitude: longitude });
  };

  handleMarkerClick = () => {
    this.refs.opendModalDetalhes.setModalVisible(true);
  };

  render() {
    const { visible } = this.state;
    const { height } = this.props || 500;

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
          //onBoundsChanged={this.onBoundsChanged}
          bounds={null}
          onSearchBoxMounted={this.onSearchBoxMounted}
        />
        <ModalDetalhesMap ref={"opendModalDetalhes"} />
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

export default connect(
  null,
  null,
  null,
  { forwardRef: true }
)(MapContainer);

import React, { Component } from "react";
import {
  GoogleMap,
  Marker,
  withScriptjs,
  withGoogleMap
} from "react-google-maps";
import SearchBox from "react-google-maps/lib/components/places/SearchBox";
import Search from "antd/lib/input/Search";
import pin from "../../images/pin.png";

/* global google */

class MapView extends Component {
  state = {
    isMarkerShown: true,
    positionMap: { lat: -6.02457, lng: -37.9845 }
  };

  componentDidMount() {
    this.delayedShowMarker();
  }

  // setIsDefaultCenter = (false) => {

  // }
  // setZoom = (15) => {

  // }

  // setCenter = (lat, lng) => {

  // }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 1000);
  };

  handleSearch = event => {
    alert("Pesquisou");
    console.log("====================================");
    console.log(event);
    console.log("====================================");
  };

  setPositionCenterMap = (lat, lng) => {
    this.setState( { positionMap: { lat: lat, lng: lng} });
  }

  render() {
    const {
      onSearchBoxMounted,
      onPlacesChanged,
      onBoundsChanged,
      onRightClick,
      defaultCenter,
      onMarkerClick,
      apiarios,
      lat,
      lng
    } = this.props;
    const { isMarkerShown} = this.state;

    console.log("====================================");
    console.log("Apiarios: ", apiarios);
    console.log("====================================");

    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: lat, lng: lng }}
        onRightClick={onRightClick}
        //setCenter={}
      >
        <SearchBox
          ref={onSearchBoxMounted}
          bounds={onBoundsChanged}
          controlPosition={google.maps.ControlPosition.TOP_RIGHT}
          onPlacesChanged={onPlacesChanged}
        >
          <Search
            placeholder="Pesquise por cidade ..."
            onSearch={value => console.log(value)}
            size="large"
            style={{ width: 300, marginTop: 10, marginRight: 10 }}
          />
        </SearchBox>
        {isMarkerShown && (
          <div>
            {apiarios &&
              apiarios.map(apiario => (
                <Marker
                  key={apiario.id}
                  position={{ lat: apiario.latitude, lng: apiario.longitude }}
                  animation={google.maps.Animation.DROP}
                  onClick={() => onMarkerClick(apiario.id)}
                  icon={pin}
                />
              ))}
          </div>
        )}
      </GoogleMap>
    );
  }
}

export default withScriptjs(withGoogleMap(MapView));

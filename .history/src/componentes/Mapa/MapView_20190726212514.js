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

  onSetPosition = () => {};

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

  render() {
    const {
      onSearchBoxMounted,
      onPlacesChanged,
      onBoundsChanged,
      onRightClick,
      onMarkerClick,
      apiarios
    } = this.props;
    const { isMarkerShown, positionMap } = this.state;

    console.log('====================================');
    console.log('Apiarios: ', this.props.listApiarios || []);
    console.log('====================================');

    return (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -6.02457, lng: -37.9845 }}
        onRightClick={onRightClick}
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
            <Marker
              position={{ lat: -6.02457, lng: -37.9845 }}
              animation={google.maps.Animation.DROP}
              onClick={onMarkerClick}
              icon={pin}
            />
          </div>
        )}
      </GoogleMap>
    );
  }
}

export default withScriptjs(withGoogleMap(MapView));

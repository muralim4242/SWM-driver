import React from "react";
import { View, Text } from "react-native";
import { MapView} from "expo";
// import collectionPoint from '../../../../assets/garbage-pickup.jpg'

export default class CollectionMap extends React.Component {

  // componentDidMount()
  // {
  //   console.log("hai");
  //   if (navigator.geolocation) {
  //       navigator.geolocation.watchPosition(this.showPosition);
  //   } else {
  //       console.log("Geolocation is not supported by this browser.");
  //   }
  // }
  //
  // showPosition=position =>
  // {
  //   console.log("Latitude: " + position.coords.latitude +
  //   "<br>Longitude: " + position.coords.longitude);
  // }

  _onMapReady= e =>
  {
    // console.log(e);
    //   if (navigator.geolocation) {
    //       navigator.geolocation.watchPosition(this._showPosition);
    //   } else {
    //       console.log("Geolocation is not supported by this browser.");
    //   }
  }

  _showPosition= position =>
  {
    console.log("Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude);
  }

  render() {
    let {mapDetails}=this.props;
    let {_onMapReady} =this;
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={mapDetails.routes[0].collectionPoints[0]}
        loadingEnabled={true}
        loadingIndicatorColor={"#606060"}
        showsTraffic={true}
        showsMyLocationButton={true}
        showsUserLocation={true}
        onMapReady={_onMapReady}
        >
        {mapDetails && mapDetails.routes[0].collectionPoints.map((marker,index) => (
          <MapView.Marker
            key={index}
            coordinate={{latitude: marker.latitude,longitude: marker.longitude}}
            title={marker.title}
            description={marker.description}
          />
        ))}

          <MapView.Polyline
            		coordinates={mapDetails.routes[0].collectionPoints}
            		strokeColor="#0bb4f1" // fallback for when `strokeColors` is not supported by the map-provider
            		strokeColors={[
            			'#7F0000',
            			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
            			'#B24112'
            		]}
            		strokeWidth={6}
  	      />
      </MapView>
    );
  }
}

// followsUserLocation={true}
// image={collectionPoint}

// followsUserLocation={true}
// liteMode={true}

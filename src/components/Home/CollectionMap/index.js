import React from "react";
import { View, Text } from "react-native";
import { MapView} from "expo";

export default class CollectionMap extends React.Component {


  render() {
    let {mapDetails}=this.props;
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={mapDetails.routes[0].collectionPoints[0]}
        loadingEnabled={true}
        loadingIndicatorColor={"#606060"}
        showsTraffic={true}
        showsMyLocationButton={true}
        showsUserLocation={true}
        >
        {mapDetails && mapDetails.routes[0].collectionPoints.map((marker,index) => (
          <MapView.Marker
            key={index}
            coordinate={{latitude: marker.latitude,longitude: marker.longitude}}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
    );
  }
}


// followsUserLocation={true}
// liteMode={true}

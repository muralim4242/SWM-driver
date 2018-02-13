import React from "react";
import { Platform, View, Text,Image } from "react-native";
import { MapView } from "expo";
import { Constants, Location, Permissions } from "expo";
import collectionPoint from '../../../../assets/garbage-pickup.png';
import truck from '../../../../assets/truck.png';

var timerObject;

export default class CollectionMap extends React.Component {
  state = {
    location: null,
    errorMessage: null,
    refreshSeconds: 15000
  };

  componentWillMount() {
    let { refreshSeconds } = this.state;
    let { _getLocationAsync } = this;
    if (Platform.OS === "android" && !Constants.isDevice) {
      this.setState({
        errorMessage:
          "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
      });
    } else {
      //Make server call to fetch initial and tracking data
      _getLocationAsync();
      //And it will call every refreshSeconds
      timerObject = setInterval(() => {
        _getLocationAsync();
      }, refreshSeconds);
    }
  }

  componentWillUnmount() {
    clearInterval(timerObject);
  }

  _getLocationAsync = async () => {
    let { _updateLocation } = this;
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log(location);
    this.setState({ location });
    _updateLocation();
  };

  _updateLocation = location => {
    //call api for updating location and batery info
  };

  render() {
    let { mapDetails } = this.props;
    let { location } = this.state;
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={mapDetails.routes[0].collectionPoints[0]}
        loadingEnabled={true}
        loadingIndicatorColor={"#606060"}
        showsTraffic={true}
        showsMyLocationButton={true}
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
        {location &&  <MapView.Marker
              key={location.coords.latitude}
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
              }}
              title={"My location"}
              description={"Vehicle Location"}
              image={truck}
            >
            
            </MapView.Marker>
        }

        {mapDetails &&
          mapDetails.routes[0].collectionPoints.map((marker, index) => (
            <MapView.Marker
              key={index}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude
              }}
              title={marker.title}
              description={marker.description}
              image={collectionPoint}
            />
          ))}


          {mapDetails && <MapView.Marker
                coordinate={{
                  latitude: mapDetails.routes[0].dumpingGround.latitude,
                  longitude: mapDetails.routes[0].dumpingGround.longitude
                }}
                title={mapDetails.routes[0].dumpingGround.title}
                description={mapDetails.routes[0].dumpingGround.description}
              />
          }

        <MapView.Polyline
          coordinates={
            location ? (
              [
                {
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude
                },
                ...mapDetails.routes[0].collectionPoints,
                mapDetails.routes[0].dumpingGround
              ]
            ) : (
              [mapDetails.routes[0].dumpingGround,...mapDetails.routes[0].collectionPoints]
            )
          }
          strokeColor="#0bb4f1" // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={[
            "#7F0000",
            "#00000000", // no color, creates a "long" gradient between the previous and next coordinate
            "#B24112",
            '#E5845C'
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

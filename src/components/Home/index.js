import React from 'react';
import { View } from 'react-native'
import { Card } from 'react-native-elements'
import VehicleDetails from './VehicleDetails';
import CollectionMap from './CollectionMap';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVehicleNumberEntered: false,
      mapDetails: {
        routes: [
          {
            collectionPoints: [
              {
                latitude: 12.9226,
                longitude: 77.6174,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                title: "Collection point 1",
                description: "Test collection points"
              },
              {
                latitude: 12.9592,
                longitude: 77.6974,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                title: "Collection point 2",
                description: "Test collection points"
              },
              {
                latitude: 12.924,
                longitude: 77.6651,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                title: "Collection point 3",
                description: "Test collection points"
              }
            ]
          }
        ],
        vehicleType: "truck",
        vehicleIconUrl: "https://s3.amazonaws.com/locus-client-assets/test/vehicles/car.png"
      },
      inputData: {}
    }
  }

  _startMyRoute = () => {
    this.setState({
      isVehicleNumberEntered: true
    })
  }

  _setInputData = (prop, itemValue, itemIndex) => {
    this.setState({
      inputData: {
        ...this.state.inputData,
        [prop]: itemValue
      }
    })
  }

  render() {
    let { _startMyRoute, _setInputData } = this;
    let { isVehicleNumberEntered, mapDetails } = this.state;
    return isVehicleNumberEntered
      ? <CollectionMap mapDetails={mapDetails} />
      : <VehicleDetails startMyRoute={_startMyRoute} setInputParent={_setInputData} inputData={this.state.inputData} />
  }
}

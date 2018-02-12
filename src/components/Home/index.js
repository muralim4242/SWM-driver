import React from 'react';
import { View } from 'react-native'
import { Card} from 'react-native-elements'
import VehicleDetails from './VehicleDetails';
import CollectionMap from './CollectionMap';


export default class Home extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={
      isVehicleNumberEntered:false,
      mapDetails:{
        routes:[
        {
          collectionPoints:[
            {
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
              title:"Collection point 1",
              description:"Test collection points"
            },
            {
              latitude: 37.78823,
              longitude: -130.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
              title:"Collection point 2",
              description:"Test collection points"
            },
            {
              latitude: 37.78880,
              longitude: -132.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
              title:"Collection point 3",
              description:"Test collection points"
            }
          ]
        }
      ],
      vehicleType:"truck",
      vehicleIconUrl:"https://s3.amazonaws.com/locus-client-assets/test/vehicles/car.png"
     }
    }
  }

  render()
  {
    let {isVehicleNumberEntered,mapDetails}=this.state;
    return  isVehicleNumberEntered?<Card title=""><VehicleDetails/></Card>:<CollectionMap mapDetails={mapDetails}/>
  }
}

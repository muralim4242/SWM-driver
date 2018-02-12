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
      isVehicleNumberEntered:false
    }
  }

  render()
  {
    let {isVehicleNumberEntered}=this.state;
    return (
        <Card title="">
          {
            isVehicleNumberEntered?<VehicleDetails/>:<CollectionMap/>
          }
        </Card>
      )
  }
}

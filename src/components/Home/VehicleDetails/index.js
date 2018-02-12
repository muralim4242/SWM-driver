import React from 'react';
import { View,Text } from 'react-native'
import { Card} from 'react-native-elements'


export default class VehicleDetails extends React.Component {
  render()
  {
    return (
        <Card title="Enter Vehicle Details">
          <View><Text>Vehicle Details</Text></View>
        </Card>
      )
  }
}

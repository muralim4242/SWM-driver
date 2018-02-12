import React from 'react';
import { Picker, Button } from 'react-native'
import { Card } from 'react-native-elements'


export default class VehicleDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      inputData: {}
    }
  }
  handleChange = (prop, itemValue, itemIndex) => {
    this.setState({
      inputData: {
        ...this.state.inputData,
        [prop]: itemValue
      }
    })
  }

  setParent = () => {
    alert(this.state.inputData["regNo"] , this.state.inputData["routeNo"])
    if(this.state.inputData["regNo"] && this.state.inputData["routeNo"]) {
      console.log(this.state.inputData["regNo"] && this.state.inputData["routeNo"])
      this.props.startMyRoute();
    }
  }

  render() {
    let {regNo, routeNo} = this.state.inputData
    return (
      <Card title="Find Your Route">
        <Picker
          selectedValue={regNo}
          onValueChange={( itemValue, itemIndex) => this.handleChange("regNo", itemValue, itemIndex)}>
          <Picker.Item label="Veh 1201" value="Veh 1201" />
          <Picker.Item label="Veh 1202" value="Veh 1202" />
          <Picker.Item label="veh 1203" value="Veh 1203" />
        </Picker>

        <Picker
          selectedValue={routeNo}
          onValueChange={( itemValue, itemIndex) => this.handleChange("routeNo", itemValue, itemIndex)}>
          <Picker.Item label="Route1" value="Route1" />
          <Picker.Item label="Route2" value="Route2" />
          <Picker.Item label="Route3" value="Route3" />
        </Picker>

        <Button
          onPress={() => {this.setParent()}}
          title="Start Trip"
          color="#841584"
          accessibilityLabel="Displays the route"
        />
      </Card>
    )
  }
}

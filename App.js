import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Button
        icon={
          <Icon
            name='arrow-right'
            size={15}
            color='white'
          />
        }
        text='BUTTON WITH ICON'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

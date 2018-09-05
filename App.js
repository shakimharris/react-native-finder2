import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
state = {
  placeName: ''
}

placeNameChangedHandler = val => {
  this.setState({
    placeName: val
  });
};


  render() {
    return (
      <View style={styles.container}>
      <TextInput
      style={{width: 300}}
      placeHolder="An awesome app built by Shakim"
      value={this.state.placeName}
      onChangeText={this.state.placeNameChangedHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

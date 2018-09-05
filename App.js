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

placeSubmitHander = () => {

});

};


  render() {
    return (
      <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
        style={{}}
        placeHolder="An awesome app built by Shakim"
        value={this.state.placeName}
        onChangeText={this.state.placeNameChangedHandler}
        style={styles.placeInput}/>
        <Button title="Add"
        style={styles.placeButton}
        onPress={this.placeSubmitHander} />

      </View>
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
  inputContainer: {
    //flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});

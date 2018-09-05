import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
state = {
  placeName: '',
  places: []
}

placeNameChangedHandler = val => {
  this.setState({
    placeName: val
  });

placeSubmitHandler = () => {
  if(this.setState.placeName.trim() === ""){
    return;
  }
  this.setState(prevState => {
    return {
    places: prevState.places.concat(prevState.placeName)
    }
  });

});

};


  render() {
    const placesOutput = this.state.places.map(place => (
      <Text>{place}</Text>
    ));
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
        onPress={this.placeSubmitHandler} />

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

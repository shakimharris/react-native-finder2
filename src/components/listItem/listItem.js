import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
const listItem = () => (
<View>
<Text>{props.placeName}</Text>

</View>

);
const styles = Stylesheet.create{(
  listItem: {
      width: "100%",
      padding: 10,
      backgroundColor: '#eee'
  }

)};
export default listItem;

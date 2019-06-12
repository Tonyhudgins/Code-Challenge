import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{backgroundColor:'grey'}}> Hello World 2 </Text>
      <Text style={{backgroundColor:'grey'}}> Hello World 2 </Text>
      <Text style={{backgroundColor:'grey'}}> Hello World 2 </Text>
      <Text style={{backgroundColor:'grey'}}> Hello World 2 </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 40,
    flex: 1,
    backgroundColor: '#DD80DD', 
  },


});

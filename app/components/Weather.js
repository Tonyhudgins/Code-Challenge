import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';

export default class BookmarksPage extends Component {
  render() {
    return (
      <View style={styles.innerContainer}>
        <Image style={{width:width}} source={require('../assets/images/weatherHeader.png')}></Image>
        <View style={styles.weatherText}>
          <Text style={styles.text}> Good Morning </Text>
          <Text style={styles.text}> Today is 72{'\u00b0'} and sunny </Text>
        </View>
      </View>
    )
  }
}

var {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    position: 'absolute',
  },

  weatherText: {
    marginHorizontal: 25,
    marginVertical: 60, 
    position: 'absolute',  
  },

  text: {
    marginVertical: 10, 
  },
})

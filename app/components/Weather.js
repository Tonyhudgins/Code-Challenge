import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';

export default class Weather extends Component {
  constructor(props) {
    super(props)
  } 


  render() {
    return (
      <View style={styles.innerContainer}>
        <Image style={{width:width}} source={require('../assets/images/weatherHeader.png')}></Image>
        {this.props.fontsLoaded ? 
          (
            <View style={styles.weatherText}>
              <Text style={styles.salutation}>Good Morning </Text>
              <Text style={styles.text}>Today is 72{'\u00b0'} and sunny </Text> 
            </View>
          )
        :
          null  
        }
        <Text>Just text {JSON.stringify(this.props)} </Text>
      </View>
    )
  }
}

var {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
//    position: 'absolute',
  },

  weatherText: {
    position: "absolute",
    marginHorizontal: 25,
    marginTop: 40,  
  },

  salutation: {
    fontFamily: 'SF-Pro-Display-Light', fontSize: 32,
    color: '#0A0A0A',
  },
  text: {
    fontFamily: 'SF-Pro-Display-Medium', fontSize: 14,
    color: '#383838',
  },
})

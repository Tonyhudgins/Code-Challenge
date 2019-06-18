import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';
import * as Font from 'expo-font';

export default class Carousel extends Component {
  constructor() {
    super()
    this.state = {
      fontLoaded: false,
    }
  }


  async componentDidMount() {
    await Font.loadAsync({
      'SF-Pro-Display-Light': require('../assets/fonts/SF-Pro-Display-Light.otf'),
      'SF-Pro-Display-Medium': require('../assets/fonts/SF-Pro-Display-Medium.otf'),
    })
    this.setState({fontLoaded: true})
  }
  render() {
    return (
      <View style={styles.innerContainer}>
        <Image style={{width:width*0.8, position: "absolute"}} source={require('../assets/images/placeCardBackground.png')}></Image>
        {this.state.fontLoaded ? 
          (
            <View style={styles.weatherText}>
              <Text style={styles.text}>Louisville, Kentucky </Text>
              <Text style={styles.salutation}>Royals Hot Chicken </Text>
            </View>
          )
        :
          (null)
        }
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
    marginHorizontal: 25,
    marginVertical: 140, 
  //  position: 'absolute',  
  },

  salutation: {
    fontFamily: 'SF-Pro-Display-Light', fontSize: 22,
//    marginVertical: 10, 
    color: '#FFFFFF',
  },
  text: {
    fontFamily: 'SF-Pro-Display-Medium', fontSize: 14,
//    marginVertical: 10, 
    color: '#ACB7B9',
  },
})

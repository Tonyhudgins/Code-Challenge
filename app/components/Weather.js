import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';
import * as Font from 'expo-font';

export default class BookmarksPage extends Component {
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
        <Image style={{width:width}} source={require('../assets/images/weatherHeader.png')}></Image>
        {this.state.fontLoaded ? 
          (
            <View style={styles.weatherText}>
              <Text style={styles.salutation}>Good Morning </Text>
              <Text style={styles.text}>Today is 72{'\u00b0'} and sunny </Text>
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
    position: 'absolute',
  },

  weatherText: {
    marginHorizontal: 25,
    marginVertical: 60, 
    position: 'absolute',  
  },

  salutation: {
    fontFamily: 'SF-Pro-Display-Light', fontSize: 32,
//    marginVertical: 10, 
    color: '#0A0A0A',
  },
  text: {
    fontFamily: 'SF-Pro-Display-Medium', fontSize: 13,
//    marginVertical: 10, 
    color: '#383838',
  },
})

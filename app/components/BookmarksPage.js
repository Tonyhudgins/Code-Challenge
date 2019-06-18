import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Dimensions, PixelRatio } from 'react-native';
import * as Constants from 'expo-constants';
import BookmarksPageBackground from './BookmarksPageBackground.js';
import Weather from './Weather.js';
import BookmarksCarousel from './BookmarksCarousel.js';
import * as Font from 'expo-font';

export default class BookmarksPage extends Component {
  constructor() {
    super()
    this.state = {
      fontsLoaded: false,
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'SF-Pro-Display-Light': require('../assets/fonts/SF-Pro-Display-Light.otf'),
      'SF-Pro-Display-Medium': require('../assets/fonts/SF-Pro-Display-Medium.otf'),
    })
    this.setState({fontsLoaded: true})
  }
  
  render() {
    return (
      <React.Fragment>
        <BookmarksPageBackground/>
        <View style={styles.layer2}> 
          <Weather {...this.state}/>
          <BookmarksCarousel/> 
        </View>
      </React.Fragment>
    )
  }
}

var {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    backgroundColor: '#FDFDFD',
  },

  layer2: {
    zIndex: 10, 
    paddingTop: Constants.statusBarHeight,  
    position: 'absolute',  
  }
})
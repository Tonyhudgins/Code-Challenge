import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Dimensions, PixelRatio } from 'react-native';
import { Constants } from 'expo';
import BookmarksPageBackground from './BookmarksPageBackground.js';
import Weather from './Weather.js';
import BookmarksCarousel from './BookmarksCarousel.js';

export default class BookmarksPage extends Component {
  render() {
    return (
      <React.Fragment>
        <BookmarksPageBackground/>
        <View style={styles.layer2}> 
          <Weather/>
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
import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { Dimensions, PixelRatio } from 'react-native';
import BookmarksPageBackground from './BookmarksPageBackground.js';
// import Weather from './BookmarksPageBackground.js';


export default class BookmarksPage extends Component {
  render() {
    return (
      <React.Fragment>
        <BookmarksPageBackground/>
        {/* <Weather style={{zIndex: 10}}/> */}
      </React.Fragment>
    )
  }
}

var {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FDFDFD',
  },

  topSpacer: {
    flexGrow: 1,
  },

  bottom: {
    height: width, 
    justifyContent: 'flex-end', 
    marginBottom: 0, 
    backgroundColor: 'grey',
  },

  text: {
    marginHorizontal: 8,
    marginVertical: 10, 
    backgroundColor: 'grey',  
  },

  backgroundImage: {
    width: width,
    height: width,  
  },
})
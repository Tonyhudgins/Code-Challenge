import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { Dimensions, PixelRatio } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class BookmarksPageBackground extends Component {
  render() {
    return (
      <View style={styles.innerContainer}>
        <View style={styles.topSpacer}/>
        <View style={styles.bottom}>
          <View style={{flex: 1, justifyContent: 'flex-start',}} >
            <Image 
              source={require('../assets/images/tripBackground.png')} 
              style={styles.backgroundImage}
            >
            </Image> 
            <View style={{
              flex: 1,
              position: 'absolute',
              zIndex: 20,
              left: 0,
              right: 0, 
              alignSelf: 'flex-start',
            }}>
              <LinearGradient
                colors={['rgba(253,253,253,1)', 'rgba(253,253,253,0)']}
                style={{...styles.gradient, ...styles.gradientTop}}
              /> 
              <LinearGradient
                colors={['rgba(10,10,10,0)', 'rgba(10,10,10,0.8)']}
                style={{...styles.gradient, ...styles.gradientBottom}}
              />
            </View>
            <Text style={{backgroundColor: '#BBB', zIndex: 100, position: 'absolute', top: 240}}> 
            Display Info {height} x {width} @ {pixRatio} FS {fontScale}</Text>  
          </View>
        </View> 
      </View>
    )
  }
}

var {height, width} = Dimensions.get('window')
var pixRatio = PixelRatio.get()
var fontScale = PixelRatio.getFontScale()

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
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
    maxHeight: 300,
  },

  text: {
    backgroundColor: 'grey',  
  },

  backgroundImage: {
    width: width,
    height: width,  
  },

  gradient: {
    flex: 1,
    left: 0,
    right: 0,
    top: 0, 
  },

  gradientTop: {
    height: 160/360*width,
    justifyContent: 'flex-start',
  },

  gradientBottom: {
    height: 200/360*width,
    justifyContent: 'flex-end',
  },
})
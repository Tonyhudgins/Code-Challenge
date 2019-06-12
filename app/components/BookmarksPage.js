import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { Dimensions, PixelRatio } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class BookmarksPage extends Component {
  render() {
    return (
      <View style={styles.innerContainer}>
        <Text style={styles.text}> Hello World 2 </Text>
        <Text style={{...styles.text, flexGrow: 1}}> Hello World 2 </Text>
        <View style={styles.bottom}>
        <View style={{flex: 1, justifyContent: 'flex-start',}} >
          <Image 
            source={require('../assets/images/tripBackground.png')} 
            style={styles.backgroundImage}
          >
          </Image> 
          <LinearGradient
            colors={['rgba(53,53,253,1)', 'rgba(253,253,253,0)']}
            style={{
              position: 'absolute',
              zIndex: 20,
              left: 0,
              right: 0, 
              height: 160,
              justifyContent: 'flex-start',
            }}
          /> 
          <Text style={{backgroundColor: '#BBB', zIndex: 100, position: 'absolute'}}> Goodbye World {width}</Text>

          </View>
        </View> 
      </View>
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
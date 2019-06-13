import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';

//const { width } = Dimensions.get('window');
const width = 260;
const height = width

export default class Carousel extends Component {
  render() {
    const { images } = this.props;
    if (images && images.length) {
      return (
        <View style={styles.scrollContainer} >
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            snapToInterval={285}
            snapToEnd={false}
          >
            {images.map((image, i) => (
              <TouchableHighlight  key={'onPress'+i} onPress={() => alert('Link to Place View')}>
              <Image key={'image'+i} style={styles.image} source={image.source} />
              </TouchableHighlight>
            ))}
          </ScrollView>
        </View>
      );
    }
    return null;    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    height,
  },
  image: {
    borderRadius: 10,
    marginLeft: 25, 
    borderRightWidth: 20,
    width: width,
    height: height,
  },
});

import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';

const { width } = Dimensions.get('window')
const cellWidth = 260*width/360
const cellHeight = cellWidth

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
            snapToInterval={cellWidth + 25}
            snapToEnd={false}
          >
            {images.map((image, i) => (
              <View key={'cell'+i} >
                <TouchableHighlight onPress={() => alert('Link to Place View')}>
                  <Image key={'image'+i} style={styles.image} source={image.source} />
                </TouchableHighlight>
                <Text style={{position: 'absolute', top: 150, left: 50, color: 'white' }}>Hello</Text>
              </View>
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
  },
  scrollContainer: {
    height: cellHeight,
  },
  image: {
    borderRadius: 10,
    marginLeft: 25, 
    borderRightWidth: 20,
    width: cellWidth,
    height: cellHeight,
  },
});

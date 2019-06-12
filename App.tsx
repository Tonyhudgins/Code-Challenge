import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import BookmarksPage from './app/components/BookmarksPage.js';


export default function App() {
  return (
    <BookmarksPage/> 
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 40,
    flex: 1,
    backgroundColor: '#DD80DD', 
  },


});

import React from 'react';
import { Image, View, Text, ItemProps, StyleSheet, StatusBar, Dimensions, FlatList } from 'react-native';

import Component from '../Components/GalleryComponent';

import Example from '../assets/snack-icon.png';

const DATA = [
  { id: '1', uri: 'https://github.com/VerdenSMOrc/Lab2/blob/main/Images/OIG2.jpg?raw=true'},
  { id: '2', uri: 'https://github.com/VerdenSMOrc/Lab2/blob/main/Images/OIG3.jpg?raw=true'},
  { id: '3', uri: ''},
  { id: '4', uri: ''},
  { id: '5', uri: ''},
  { id: '6', uri: ''},
  { id: '7', uri: ''},
  { id: '8', uri: ''},
  { id: '9', uri: ''},
  { id: '10', uri: ''},
  { id: '11', uri: ''},
  { id: '12', uri: ''},
  { id: '13', uri: ''},
  { id: '14', uri: ''},
];

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Image source={{uri: title.uri}} style={styles.image}/>
  </View>
);

const styles = StyleSheet.create({
  item: {
    width: Dimensions.get('window').width/2 - 15,
    height: Dimensions.get('window').width/2 - 85,
    borderRadius: Dimensions.get('window').width/25,
    backgroundColor: '#f7f7f7',
    padding: 0,
    marginVertical: 5,
    margin: 5,
    textAlign: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5.0,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: Dimensions.get('window').width/25,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 18,
  },
  list: {
    fontSize: 18,
    margin: 5,
    marginTop: 0,
    paddingTop: 5
  }
});

export default function PhotosTab() {
  return (
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <Component/>
    </View>
  );
}

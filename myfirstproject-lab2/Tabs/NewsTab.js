import React, { useEffect, useState } from 'react';
import {
  Image,
  View,
  Text,
  ItemProps, 
  StyleSheet, 
  StatusBar, 
  Dimensions, 
  FlatList,
  Alert,
} from 'react-native';

import Component from '../Components/NewsComponent';

const styles = StyleSheet.create({
  item: {
    backgroundColor: '',
    padding: Dimensions.get('window').width/50,
    marginVertical: 2,
    width: Dimensions.get('window').width - 25,
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  date: {
    fontSize: 15,
    fontWeight: 'lighter',
    marginLeft: 15,
  },
  text: {
    fontSize: 18,
    marginVertical: 0,
    marginLeft: 15,
  },
  image: {
    height: Dimensions.get('window').width/4,
    width:  Dimensions.get('window').width/4,
    marginLeft: 0,
    borderRadius: Dimensions.get('window').width/25,
    backgroundColor: '#f7f7f7',
  }
});

export default function NewsTab() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <Component path={'../news.json'}/>
    </View>
  );
}

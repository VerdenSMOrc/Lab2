import React, { useEffect, useState } from 'react';
import {
  Image,
  Dimensions,
  View,
  Text,
  FlatList,
  StyleSheet,
  Alert,
} from 'react-native';

const Component = ({ path }) => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/VerdenSMOrc/Lab2/main/Images/photos.json'
        );
        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        {
          /*alert('Помилка отримання даних' + ' ' + error);*/
        }
        Alert.alert(
          'Помилка отримання даних PhotoGallery',
          'Помилка отримання даних' + ' ' + error
        );
      }
    };
    fetchData();
  }, []);

  const styles = StyleSheet.create({
    item: {
      width: Dimensions.get('window').width / 2 - 15,
      height: Dimensions.get('window').width / 2 - 85,
      borderRadius: Dimensions.get('window').width / 25,
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
      borderRadius: Dimensions.get('window').width / 25,
      resizeMode: 'cover',
    },
    title: {
      fontSize: 18,
    },
    list: {
      fontSize: 18,
      margin: 5,
      marginTop: 0,
      paddingTop: 5,
    },
  });

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.uri }} style={styles.image} />
    </View>
  );

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.list}
        numColumns={2}
        data={photos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Component;

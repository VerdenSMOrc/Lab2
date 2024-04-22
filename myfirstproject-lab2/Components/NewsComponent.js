import React, { useEffect, useState } from 'react';
import { Image, Dimensions, View, Text, FlatList, StyleSheet, Alert } from 'react-native';

const Component = ({ path }) => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/VerdenSMOrc/Lab2/main/news.json');
        const data = await response.json();
        setNews(data);
      } catch (error) {
        {/*alert('Помилка отримання даних' + ' ' + error);*/}
        Alert.alert('Помилка отримання даних','Помилка отримання даних' + ' ' + error);
      }
    };
    fetchData();
  }, []);

const styles = StyleSheet.create({
  item: {
    padding: Dimensions.get('window').width/50,
    marginVertical: 2,
    width: Dimensions.get('window').width - 25,
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    width: Dimensions.get('window').width*0.6,
    fontSize: 19,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  date: {
    fontSize: 12,
    fontWeight: 'lighter',
    marginLeft: 15,
  },
  text: {
    width: Dimensions.get('window').width*0.6,
    fontSize: 15,
    marginVertical: 0,
    marginLeft: 15,
  },
  image: {
    height: Dimensions.get('window').width/4,
    width:  Dimensions.get('window').width/4,
    marginLeft: 0,
    borderRadius: Dimensions.get('window').width/25,
    backgroundColor: '#f7f7f7',
  },
  separator: {
    height: 1,
    backgroundColor: '#cccccc'
  }
});

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{uri: item.uri}} style={styles.image}/>
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.text}>{item.text.slice(0, 55)}</Text>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      {/*<Text>{news.title}</Text>*/}
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => {
      return (<View style={styles.separator} />);
    }}
        data={news}
        renderItem={renderItem}
        keyExtractor={item => item.title}
      />
    </View>
  );
};

export default Component;

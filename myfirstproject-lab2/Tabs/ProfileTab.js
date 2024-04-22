import React from 'react';
import {
  View,
  FlatList,
  Vibration,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Dimensions,
} from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 15,
  },
  inputTitle: {
    fontSize: 14,
    margin: 5,
  },
  input: {
    height: 40,
    width: Dimensions.get('window').width - 50,
    borderRadius: Dimensions.get('window').width / 50,
    margin: 5,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    height: 40,
    width: Dimensions.get('window').width - 50,
    borderRadius: Dimensions.get('window').width / 50,
    margin: 5,
    marginTop: 380,
    backgroundColor: '#4287f5',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  buttonText: {
    color: 'white',
  },
});

const DATA = [
  { id: '1', uri: '', label: 'Електронна адреса' },
  { id: '2', uri: '', label: 'Пароль' },
  { id: '3', uri: '', label: 'Пароль (ще раз)' },
  { id: '4', uri: '', label: 'Прізвище', margin: 25 },
  { id: '5', uri: '', label: 'Ім`я' },
];

const inputElement = ({ item }) => (
  <View>
    <Text style={(styles.inputTitle, { marginTop: item.margin })}>
      {item.label}
    </Text>
    <TextInput style={styles.input} />
  </View>
);

export default function ProfileTab() {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
      <Text style={styles.title}>Реєстарція</Text>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={DATA}
          renderItem={inputElement}
          keyExtractor={(item) => item.id}
        />
        <Pressable style={styles.button} onPress={() => Vibration.vibrate(10)}>
          <Text style={styles.buttonText}>Зареєстаруватися</Text>
        </Pressable>
      </View>
    </View>
  );
}

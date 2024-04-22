import React from 'react';
import { View, Image, Text, Platform, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import NewsTab from './Tabs/NewsTab';
import PhotosTab from './Tabs/PhotosTab';
import ProfileTab from './Tabs/ProfileTab';
import ztuIcon from './assets/university-colored.png';

const Tab = createMaterialTopTabNavigator();
let safeAreaStyle;
if (Platform.OS == 'android' || Platform.OS == 'ios')
  if (Platform.OS == 'android') {
    safeAreaStyle = { paddingTop: 45 };
  } else {
    safeAreaStyle = { paddingTop: 55 };
  }
else {
  safeAreaStyle = { paddingTop: 15 };
}

const styles = StyleSheet.create({
  Logo: {
    width: 135,
    height: 40,
    marginLeft: 15,
  },
  LogoText: {
    marginLeft: 'auto',
    marginRight: 55,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default function App() {
  return (
    <View style={[{ flex: 1 }, safeAreaStyle]}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={ztuIcon} style={styles.Logo} />
        <Text style={styles.LogoText}>FirstMobileApp</Text>
      </View>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Головна') {
                iconName = 'home';
              }
              if (route.name === 'Фотогалерея') {
                iconName = 'camera';
              }
              if (route.name === 'Профіль') {
                iconName = 'person';
              }

              return <Ionicons name={iconName} size={25} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
            labelStyle: { fontSize: 14, textTransform: 'none' },
            indicatorStyle: { backgroundColor: '' },
            showIcon: true,
            style: { backgroundColor: '#f7f7f7', marginTop: 20 },
          }}>
          <Tab.Screen name="Головна" component={NewsTab} />
          <Tab.Screen name="Фотогалерея" component={PhotosTab} />
          <Tab.Screen name="Профіль" component={ProfileTab} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

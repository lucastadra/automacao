/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import {
  useFonts,
  JosefinSans_400Regular,
} from '@expo-google-fonts/josefin-sans';
import Routes from './src/routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#083352" />
      <View style={{ flex: 1 }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default App;

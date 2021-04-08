/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import {
  JosefinSans_400Regular,
  JosefinSans_600SemiBold,
  JosefinSans_700Bold,
} from '@expo-google-fonts/josefin-sans';

import Routes from './src/routes';

export default class App extends React.Component<
  Record<string, unknown>,
  { fontLoaded: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      fontLoaded: false,
    };
  }

  async componentDidMount(): Promise<void> {
    try {
      await Font.loadAsync({
        JosefinSans_400Regular,
        JosefinSans_600SemiBold,
        JosefinSans_700Bold,
      });

      this.setState({ fontLoaded: true });
    } catch (error) {
      console.error('error loading icon fonts', error);
    }
  }

  render(): JSX.Element {
    const { fontLoaded } = this.state;
    if (!fontLoaded) {
      return <AppLoading />;
    }

    return (
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#083352" />
        <View style={{ flex: 1 }}>
          <Routes />
        </View>
      </NavigationContainer>
    );
  }
}

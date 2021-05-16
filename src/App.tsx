import 'react-native-gesture-handler';

import React, { useRef } from 'react';
import { View, StatusBar } from 'react-native';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import * as Sentry from '@sentry/react-native';
import Routes from './routes';

const routingInstrumentation = new Sentry.ReactNavigationV5Instrumentation();

Sentry.init({
  dsn:
    'https://c543ac7fd5e84a32ac43fa854411cb28@o567794.ingest.sentry.io/5712101',
  integrations: [
    new Sentry.ReactNativeTracing({
      // tracingOrigins: ['localhost', /^\//],
      routingInstrumentation,
    }),
  ],
  tracesSampleRate: 0.2,
});

const App: React.FC = () => {
  const navigation = useRef<NavigationContainerRef>(null);
  return (
    <NavigationContainer
      ref={navigation}
      onReady={() => {
        routingInstrumentation.registerNavigationContainer(navigation);
      }}
    >
      <StatusBar barStyle="light-content" backgroundColor="#083352" />
      <View style={{ flex: 1 }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default App;

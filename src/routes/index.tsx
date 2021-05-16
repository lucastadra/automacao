import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../pages/Welcome';
import SignIn from '../pages/SignIn';
// import SignUp from '../pages/SignUp';
import ProfileSelection from '../pages/ProfileSelection';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#192A56' },
    }}
    initialRouteName="Welcome"
  >
    <Auth.Screen name="Welcome" component={Welcome} />
    <Auth.Screen name="SignIn" component={SignIn} />
    {/* <Auth.Screen name="SignUp" component={SignUp} /> */}
    <Auth.Screen name="ProfileSelection" component={ProfileSelection} />
  </Auth.Navigator>
);

export default AuthRoutes;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/product/navigate/route_navigate';

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

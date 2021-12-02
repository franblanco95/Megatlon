import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from './navigation/TabNavigator';
import { Provider } from 'react-redux';
import store from './store/store'

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar
          animated={true}
          backgroundColor="#161819"
          barStyle="light-content"
        />

        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
}

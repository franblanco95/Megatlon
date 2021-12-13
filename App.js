import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/store'
import MainNavigator from './navigation';

if (__DEV__) {
  import('./reactotron').then(() => console.log('Reactotron Configured'))
}

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
      <StatusBar
        animated={true}
        backgroundColor="#161819"
        barStyle="light-content"
      />
    </Provider>
  );
}

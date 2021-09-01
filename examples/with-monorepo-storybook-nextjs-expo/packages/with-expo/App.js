import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import Text from '@skynexui/native/components/Text'

export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Text>Welcome to Expo with @skynexui!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

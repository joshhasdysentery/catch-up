import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import NewsScreen from './screens/NewsScreen';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header />
      <NewsScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

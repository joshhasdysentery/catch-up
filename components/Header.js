import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
  return <View style={styles.header}></View>;
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: '#2980B9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Header;

import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';

export default function Container({children}) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

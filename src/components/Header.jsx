import {Text, View, StyleSheet} from 'react-native';
import React from 'react';

export default function Header({title}) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 16,
    backgroundColor: '#6a4234',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
});

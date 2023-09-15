import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DetailScreen = ({route, navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Page</Text>
      <Text style={styles.textParams}>id : {route.params.id}</Text>
      <Button title="GoBack" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6a4234',
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
  },
  textParams: {
    fontSize: 32,
    color: '#fff',
    marginVertical: 16,
  },
});

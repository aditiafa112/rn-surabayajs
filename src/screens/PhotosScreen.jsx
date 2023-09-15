import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import Container from '../components/Container';

const PhotosScreen = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const getData = () => {
    setIsLoading(true);
    return fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => setPhotos(json))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getData();
  }, []);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await getData();
    setRefreshing(false);
  }, []);

  return (
    <Container>
      <Header title={'Photos'} />
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          keyExtractor={item => item.id}
          data={photos}
          ListHeaderComponent={<HeaderPhoto />}
          renderItem={({item}) => {
            return (
              <View item={item.id} style={styles.listItem}>
                <Image source={{uri: item.url}} style={styles.photoImage} />
                <Text style={styles.listItemText}>{item.title}</Text>
              </View>
            );
          }}
          ListEmptyComponent={<EmptyPhoto />}
        />
      )}
    </Container>
  );
};

export default PhotosScreen;

const HeaderPhoto = () => {
  return (
    <View style={styles.headerView}>
      <Text style={styles.componentText}>List Photo</Text>
    </View>
  );
};

const EmptyPhoto = () => {
  return (
    <View style={styles.EmptyView}>
      <Text style={styles.componentText}>There is no photo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 16,
    borderBottomColor: '#313131',
    borderWidth: 2,
    borderRadius: 8,
    overflow: 'hidden',
  },
  listItemText: {
    flex: 1,
    padding: 16,
    fontSize: 16,
    fontWeight: '600',
  },
  photoImage: {
    width: 100,
    height: 100,
  },
  headerView: {
    alignItems: 'left',
    margin: 16,
  },
  componentText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#313131',
  },
  EmptyView: {
    alignItems: 'center',
    margin: 16,
  },
});

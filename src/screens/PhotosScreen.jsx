import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import Container from '../components/Container';

const PhotosScreen = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const data = () => {
      setIsLoading(true);
      fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(json => setPhotos(json))
        .finally(() => setIsLoading(false));
    };

    data();
  }, []);

  return (
    <Container>
      <Header title={'Photos'} />
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
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
});

const HeaderPhoto = () => {
  return (
    <View style={{alignItems: 'left', margin: 16}}>
      <Text style={{fontSize: 16, fontWeight: '600', color: '#313131'}}>
        List Photo
      </Text>
    </View>
  );
};

const EmptyPhoto = () => {
  return (
    <View style={{alignItems: 'center', margin: 16}}>
      <Text style={{fontSize: 16, fontWeight: '600', color: '#313131'}}>
        There is no photo
      </Text>
    </View>
  );
};

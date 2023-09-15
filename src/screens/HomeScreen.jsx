import React, {useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CardPortrait from '../components/CardPortrait';
import Container from '../components/Container';
import Header from '../components/Header';
import {MENU, PROMO_URI} from '../data';
import ModalPromo from '../components/ModalPromo';

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container>
      <Header title={'Croissant Bakery'} />
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <View style={styles.flexRowBetween}>
            <Text style={styles.title}>Promo</Text>
            <Text style={styles.text}>See All</Text>
          </View>
          <Pressable onPress={() => setModalVisible(true)}>
            <Image
              source={{
                uri: PROMO_URI,
              }}
              alt="promo-banner"
              style={styles.promoImage}
            />
          </Pressable>
        </View>

        <View style={styles.section}>
          <View style={styles.flexRowBetween}>
            <Text style={styles.title}>Recommendation for you</Text>
            <Text style={styles.text}>See All</Text>
          </View>
          <View style={styles.menuWrapper}>
            {MENU.map(item => {
              return (
                <CardPortrait
                  key={item.id}
                  name={item.name}
                  price={item.price}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>

      <ModalPromo
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
  },
  flexRowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  section: {
    marginBottom: 32,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#313131',
  },
  text: {
    fontSize: 14,
    color: '#313131',
  },
  promoImage: {
    borderRadius: 8,
    marginTop: 16,
    width: '100%',
    height: 200,
  },
  menuWrapper: {
    marginTop: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

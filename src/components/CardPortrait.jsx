import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const formatCurrency = num =>
  'Rp.' + new Intl.NumberFormat('id-ID').format(num);

const CardPortrait = ({name, price}) => {
  return (
    <View style={styles.portraitCard}>
      <Image
        source={require('../assets/croissant.jpg')}
        style={styles.cardImage}
      />
      <Text style={styles.cardTitle} numberOfLines={2}>
        {name}
      </Text>
      <Text style={styles.cardPrice} numberOfLines={1}>
        {formatCurrency(price)}
      </Text>
    </View>
  );
};

export default CardPortrait;

const styles = StyleSheet.create({
  portraitCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  cardTitle: {
    paddingTop: 8,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#313131',
  },
  cardPrice: {
    fontSize: 14,
    color: '#313131',
  },
});

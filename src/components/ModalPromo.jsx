import {
  View,
  Text,
  Modal,
  Image,
  Pressable,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
import {PROMO_URI} from '../data';

const ModalPromo = ({modalVisible, setModalVisible}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Image
            source={{
              uri: PROMO_URI,
            }}
            alt="promo-banner"
            style={styles.modalImage}
          />
          <Text style={styles.modalTitle}>
            Promo Croissant Bundle all flavour
          </Text>
          <Text style={styles.modalDescription}>
            Include Croissant all flavour (11 pcs) and goody bag, only 99k from
            120k (save 21k) and free delivery for 5km from store location
          </Text>
          <Pressable
            style={styles.buttonClose}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.buttonCloseText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default ModalPromo;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#00000080',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    overflow: 'hidden',
  },
  modalImage: {
    resizeMode: 'cover',
    width: Dimensions.get('window').width - 52,
    height: 200,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    paddingHorizontal: 16,
    color: '#6a4234',
  },
  modalDescription: {
    fontSize: 14,
    textAlign: 'left',
    paddingHorizontal: 16,
    marginTop: 8,
    marginBottom: 16,
    color: '#313131',
  },
  buttonClose: {
    width: '100%',
    backgroundColor: '#6a4234',
    paddingVertical: 8,
  },
  buttonCloseText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

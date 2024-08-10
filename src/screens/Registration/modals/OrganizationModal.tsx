import { MaterialIcons } from '@expo/vector-icons';
import { memo } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import ButtonLinearGradient from '../../../components/ButtonLinearGradient';
import Input from '../../../components/Input';
import Pressable from '../../../components/Pressable';
import FullScreenModal from '../../../modals/FullScreenModal';
import { TEXT_SIZES } from '../../../theme/Theme';

type Props = {
  modalVisible: boolean;
  toggleModal: () => void;
};

const OrganziationModal = memo(function OrganziationModal({
  modalVisible,
  toggleModal,
}: Props) {
  return (
    <FullScreenModal {...{ modalVisible, toggleModal }}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../assets/envelope.png')}
            resizeMode="stretch"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.largeText}>
            Enter the organization owner's email
          </Text>
          <Text style={styles.centerText}>
            Enter the organization owner's email below. We will send them a
            notification to let them know you've joined. Once they approve, you
            will be added to the organization.
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.marginBottom}>
            <Input placeholder="Email" />
          </View>
          <ButtonLinearGradient label="Submit" type="primaryRounded" />
        </View>
        <View style={styles.closeIcon}>
          <Pressable onPress={toggleModal}>
            <MaterialIcons name="close" size={24} color="black" />
          </Pressable>
        </View>
      </View>
    </FullScreenModal>
  );
});

export default OrganziationModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  imageContainer: {
    width: '100%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 40,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  largeText: {
    fontSize: TEXT_SIZES.TEXT22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  centerText: {
    textAlign: 'center',
  },
  inputContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 100,
  },
  closeIcon: {
    position: 'absolute',
    top: 40,
    right: 40,
  },
  marginBottom: {
    marginBottom: 20,
  },
});

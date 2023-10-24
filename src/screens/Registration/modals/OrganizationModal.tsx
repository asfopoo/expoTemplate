import { memo } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Pressable from '../../../components/Pressable';
import FullScreenModal from '../../../modals/FullScreenModal';

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
        <Text>Search for you organization</Text>
        <Pressable onPress={toggleModal}>
          <Text>Close</Text>
        </Pressable>
      </View>
    </FullScreenModal>
  );
});

export default OrganziationModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

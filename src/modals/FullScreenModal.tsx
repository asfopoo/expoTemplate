import { memo } from 'react';
import { Modal, StyleSheet, View } from 'react-native';

type Props = {
  modalVisible: boolean;
  toggleModal: () => void;
  children: React.ReactNode;
};

const FullScreenModal = memo(function FullScreenModal({
  modalVisible,
  toggleModal,
  children,
}: Props) {
  return (
    <View>
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>{children}</View>
        </View>
      </Modal>
    </View>
  );
});

export default FullScreenModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    width: '100%',
    flex: 1,
  },
});

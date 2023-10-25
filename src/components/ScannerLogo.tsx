import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';

import { COLORS } from '../theme/colors';
import { TEXT_SIZES } from '../theme/layout';

export default function ScannerLogo() {
  return (
    <View style={styles.iconContainer}>
      <MaterialCommunityIcons
        name="barcode-scan"
        size={80}
        color={COLORS.NAVY_BLUE}
      />
      <Text style={styles.titleText}>IDSxanner</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: TEXT_SIZES.TEXT30,
    fontWeight: 'bold',
    color: COLORS.NAVY_BLUE,
  },
  iconContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';

import { TEXT_SIZES } from '../theme/Theme';

import { useThemeColors } from '@/hooks/useThemeColors';
import { Theme } from '@/theme/Colors';

export default function ScannerLogo() {
  const themeColors = useThemeColors();
  const styles = makeStyles(themeColors);

  return (
    <View style={styles.iconContainer}>
      <MaterialCommunityIcons
        name="barcode-scan"
        size={80}
        color={themeColors.colors.primary}
      />
      <Text style={styles.titleText}>IDSxanner</Text>
    </View>
  );
}

const makeStyles = ({ colors }: Theme) =>
  StyleSheet.create({
    titleText: {
      fontSize: TEXT_SIZES.TEXT30,
      fontWeight: 'bold',
      color: colors.primary,
    },
    iconContainer: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

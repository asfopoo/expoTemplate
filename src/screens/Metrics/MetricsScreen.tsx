import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView, StyleSheet } from 'react-native';

import { Text } from '@/components/Text';
import { useThemeColors } from '@/hooks/useThemeColors';
import { RootStackParamList } from '@/navigation/types';
import { TEXT_SIZES } from '@/theme/Theme';
import { Theme } from '@/theme/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'Metrics Tab'>;

export default function MetricsScreen({ navigation }: Props) {
  const themeColors = useThemeColors();
  const styles = makeStyles(themeColors);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Metrix screen</Text>
    </SafeAreaView>
  );
}

const makeStyles = ({ colors }: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: '65%',
    },
    contentContainer: {
      height: '50%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: colors.text,
      fontSize: TEXT_SIZES.TEXT40,
    },
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    shadowCardContainer: {
      height: 150,
      width: 150,
    },
  });

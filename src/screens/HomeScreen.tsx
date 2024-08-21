import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

import { SafeAreaView } from '@/components/SafeAreaView';
import { Text } from '@/components/Text';
import { View } from '@/components/View';
import { RootStackParamList } from '@/navigation/types';
import { SPACING } from '@/theme/Theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Home Tab'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.dailyContainer}>
        <Text>Intro card</Text>
        <Text>Today's overview</Text>
        <Text>breaking down income by service type, day, or month.</Text>
        <Text>Inventory Management</Text>
        <Text>
          Offer access to a library of tutorials or training materials on new
          techniques, styles, or business management tips.
        </Text>
        <Text>
          Offer integration with tax preparation software or services.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: SPACING.SPACING12,
  },
  dailyContainer: {
    flex: 1,
    marginVertical: SPACING.SPACING12,
  },
});

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

import { SafeAreaView } from '@/components/SafeAreaView';
import { Text } from '@/components/Text';
import { View } from '@/components/View';
import { RootStackParamList } from '@/navigation/types';
import { SPACING } from '@/theme/Theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Waitlist Tab'>;

export default function WaitlistScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.dailyContainer}>
        <Text>Waitlist</Text>
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

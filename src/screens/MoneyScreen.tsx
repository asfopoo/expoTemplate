import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native';

import { RootStackParamList } from '../navigation/types';

import { Text } from '@/components/Text';

type Props = NativeStackScreenProps<RootStackParamList, 'Money Tab'>;

export default function MoneyScreen({ navigation }: Props) {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text>Money screen</Text>
    </SafeAreaView>
  );
}

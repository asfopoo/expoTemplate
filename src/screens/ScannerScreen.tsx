import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, SafeAreaView } from 'react-native';

import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Scanner Tab'>;

export default function ScannerScreen({ navigation }: Props) {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text>Scanner screen</Text>
    </SafeAreaView>
  );
}

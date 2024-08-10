import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useLayoutEffect } from 'react';
import { Image, SafeAreaView, StyleSheet, View, Text } from 'react-native';

import { RootStackParamList } from '../navigation/types';
import { TEXT_SIZES } from '../theme/Theme';

type Props = NativeStackScreenProps<RootStackParamList, 'History Tab'>;

export default function HistoryScreen({ navigation }: Props) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/hand_scan.png')}
          resizeMode="stretch"
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.largeText}>You dont have any scans today</Text>
        </View>
        <Text style={styles.text}>
          Scan an ID to get started. Once you scan an ID, you will be able to
          view the history here.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: '10%',
  },
  imageContainer: {
    width: '80%',
    height: '50%',
    paddingLeft: '10%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  image: {
    width: '100%',
    height: '80%',
  },
  largeText: {
    fontSize: TEXT_SIZES.TEXT22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    marginBottom: 40,
  },
  text: {
    textAlign: 'center',
  },
  titleContainer: {
    marginBottom: 20,
  },
});

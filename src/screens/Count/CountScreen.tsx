import { AntDesign } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as Haptics from 'expo-haptics';
import { LinearGradient } from 'expo-linear-gradient';
import { useLayoutEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Alert } from 'react-native';

import Button from '../../components/Button';
import CircularView from '../../components/CircularView';
import SectionCard from '../../components/SectionCard';
import ShadowCard from '../../components/ShadowCard';
import useAsyncStorage from '../../hooks/useAsyncStorage';
import { RootStackParamList } from '../../navigation/types';
import { COLORS } from '../../theme/colors';
import { TEXT_SIZES } from '../../theme/layout';

type Props = NativeStackScreenProps<RootStackParamList, 'Count Tab'>;

export default function CountScreen({ navigation }: Props) {
  const { getData, storeData } = useAsyncStorage('count', 0);
  const count = parseInt(getData, 10);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const incrementCount = () => {
    if (count === 9999) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    storeData((count + 1).toString());
  };

  const decrementCount = () => {
    if (count === 0) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    storeData((count - 1).toString());
  };

  const resetCount = () => {
    if (count === 0) return;
    Alert.alert('Warning', 'Are you sure you want to Reset the count?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      { text: 'Reset', onPress: () => storeData('0') },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[COLORS.LIGHT_BLUE, COLORS.NAVY_BLUE]}
        style={styles.background}
      />
      <View style={styles.contentContainer}>
        <CircularView size="size30">
          <Text style={styles.whiteText}>Count</Text>
          <Text style={styles.whiteText}>{count}</Text>
        </CircularView>
      </View>
      <SectionCard>
        <View style={styles.rowContainer}>
          <View style={styles.shadowCardContainer}>
            <ShadowCard onPress={decrementCount}>
              <AntDesign name="minus" size={40} color="black" />
            </ShadowCard>
          </View>
          <View style={styles.shadowCardContainer}>
            <ShadowCard onPress={incrementCount}>
              <AntDesign name="plus" size={40} color="black" />
            </ShadowCard>
          </View>
        </View>
        <Button
          onPress={resetCount}
          label="Reset"
          variant="secondaryRoundedShadow"
        />
      </SectionCard>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  whiteText: {
    color: COLORS.WHITE,
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

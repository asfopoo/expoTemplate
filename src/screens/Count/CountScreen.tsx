import { AntDesign } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { useLayoutEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

import Button from '@/components/Button';
import CircularView from '@/components/CircularView';
import SectionCard from '@/components/SectionCard';
import ShadowCard from '@/components/ShadowCard';
import { useThemeColors } from '@/hooks/useThemeColors';
import { RootStackParamList } from '@/navigation/types';
import { Theme } from '@/theme/Colors';
import { TEXT_SIZES } from '@/theme/Theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Count Tab'>;

export default function CountScreen({ navigation }: Props) {
  const themeColors = useThemeColors();
  const styles = makeStyles(themeColors);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[themeColors.colors.tint, themeColors.colors.primary]}
        style={styles.background}
      />
      <View style={styles.contentContainer}>
        <CircularView size="size30">
          <Text style={styles.text}>I do nothing</Text>
        </CircularView>
      </View>
      <SectionCard>
        <View style={styles.rowContainer}>
          <View style={styles.shadowCardContainer}>
            <ShadowCard>
              <AntDesign name="minus" size={40} color="black" />
            </ShadowCard>
          </View>
          <View style={styles.shadowCardContainer}>
            <ShadowCard>
              <AntDesign name="plus" size={40} color="black" />
            </ShadowCard>
          </View>
        </View>
        <Button
          onPress={() => console.log('Reset')}
          label="Reset"
          type="secondaryRoundedShadow"
        />
      </SectionCard>
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
